import { Page } from "./layout/Page.tsx";
import { PasswordView } from "../shared/ui/password/PasswordView.tsx";
import { copyPassword } from "../features/password/copyPassword.ts";
import {
  PasswordParams,
  passwordParamsConfig,
  useGeneratePassword,
} from "../features/password/useGeneratePassword.ts";
import { useEffect, useState } from "react";
import { ChangePasswordLength } from "../features/password/ChangePasswordLength.tsx";
import { ChangePasswordParams } from "../features/password/ChangePasswordParams.tsx";

const generateInitPasswordParams = (): Record<
  keyof PasswordParams,
  boolean
> => {
  return Object.entries(passwordParamsConfig).reduce<
    Record<keyof PasswordParams, boolean>
  >(
    (acc, [key, value]) => {
      acc[key as keyof PasswordParams] = value.value;
      return acc;
    },
    {} as Record<keyof PasswordParams, boolean>,
  );
};

export const App = () => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [passwordParams, setPasswordParams] = useState<
    Record<keyof PasswordParams, boolean>
  >(generateInitPasswordParams());
  const { password, generatePassword } = useGeneratePassword();

  useEffect(() => {
    generatePassword(passwordLength, passwordParams);
  }, [passwordLength, passwordParams]);

  const onChangePasswordParamsHandler = (
    paramKey: keyof PasswordParams,
    value: boolean,
  ) => {
    setPasswordParams((prev) => {
      const newObject = { ...prev, [paramKey]: value };
      if (Object.values(newObject).filter((item) => item).length === 0) {
        newObject[paramKey] = true;
      }
      if (newObject[paramKey] === prev[paramKey]) {
        return prev;
      }
      return newObject;
    });
  };
  if (!password) return null;
  return (
    <Page>
      <div className={"flex flex-col w-[540px] items-center"}>
        <h1 className={"text-headerM text-gray mb-8"}>Password Generator</h1>
        <PasswordView
          password={password}
          onCopyPasswordClickHandler={copyPassword}
        />
        <div className={"mt-6 bg-darkGray w-full px-8 py-8"}>
          <ChangePasswordLength
            passwordLength={passwordLength}
            setPasswordLength={setPasswordLength}
          />
          <ChangePasswordParams
            params={passwordParams}
            changeParams={onChangePasswordParamsHandler}
          />
        </div>
      </div>
    </Page>
  );
};
