import { useState } from "react";
import { passwordDataConfig } from "./passwordDataConfig.ts";

export type PasswordParam = {
  label: string;
  value: boolean;
  symbols: string[];
};
export type PasswordParams = {
  withUpperCaseLetters: PasswordParam;
  withLowerCaseLetters: PasswordParam;
  withNumbers: PasswordParam;
  withSymbols: PasswordParam;
};

export const passwordParamsConfig: PasswordParams = {
  withUpperCaseLetters: {
    label: "Include Uppercase Letters",
    value: true,
    symbols: passwordDataConfig.upperCaseLetters,
  },
  withLowerCaseLetters: {
    label: "Include Lowercase Letters",
    value: true,
    symbols: passwordDataConfig.lowerCaseLetters,
  },
  withNumbers: {
    label: "Include Numbers",
    value: true,
    symbols: passwordDataConfig.numbers,
  },
  withSymbols: {
    label: "Include Symbols",
    value: false,
    symbols: passwordDataConfig.symbols,
  },
};

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min));
};
const getRandomPasswordGroup = (
  params: Record<keyof PasswordParams, boolean>,
) => {
  const keys = Object.keys(params).filter((key) => {
    const value = params[key as keyof typeof params];
    return value;
  });
  const randomIndex = getRandomNumber(0, keys.length);
  const values =
    passwordParamsConfig[keys[randomIndex] as keyof PasswordParams].symbols;
  return values;
};

const getRandomLetter = (passwordConfigLetterGroupData: string[]) => {
  const randomIndex = getRandomNumber(0, passwordConfigLetterGroupData.length);
  return passwordConfigLetterGroupData[randomIndex];
};
export const useGeneratePassword = () => {
  const [password, setPassword] = useState("");
  const generatePassword = (
    length: number,
    params: Record<keyof PasswordParams, boolean>,
  ) => {
    const passwordLetters = new Array(length).fill("").map(() => {
      const passwordConfigLetterGroupData = getRandomPasswordGroup(params);
      const letter = getRandomLetter(passwordConfigLetterGroupData);
      return letter;
    });

    setPassword(passwordLetters.join(""));
  };

  return {
    password,
    generatePassword,
  };
};
