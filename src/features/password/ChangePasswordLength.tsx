import { Range } from "../../shared/ui/range/Range.tsx";

type CheckPasswordLengthProps = {
  passwordLength: number;
  setPasswordLength: (password: number) => void;
};

export const ChangePasswordLength = ({
  setPasswordLength,
  passwordLength,
}: CheckPasswordLengthProps) => {
  return (
    <div className={"w-full"}>
      <div className={"flex justify-between items-center"}>
        <span className={"text-almostWhite text-body"}>Character Length</span>
        <span className={"text-neonGreen text-headerL"}>{passwordLength}</span>
      </div>
      <Range
        min={5}
        max={20}
        onChange={setPasswordLength}
        value={passwordLength}
      />
    </div>
  );
};
