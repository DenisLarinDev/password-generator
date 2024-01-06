import { PasswordParams, passwordParamsConfig } from "./useGeneratePassword.ts";
import { CheckBox } from "../../shared/ui/checkBox/CheckBox.tsx";

type ChangePasswordParamsProps = {
  params: Record<keyof PasswordParams, boolean>;
  changeParams: (param: keyof PasswordParams, value: boolean) => void;
};

export const ChangePasswordParams = ({
  changeParams,
  params,
}: ChangePasswordParamsProps) => {
  return (
    <div className={"flex flex-col gap-[20px]"}>
      {Object.keys(params).map((key) => {
        const item = params[key as keyof PasswordParams];
        const { label } = passwordParamsConfig[key as keyof PasswordParams];
        return (
          <CheckBox
            key={label}
            isChecked={item}
            label={label}
            onChange={(value) =>
              changeParams(key as keyof PasswordParams, value)
            }
          />
        );
      })}
    </div>
  );
};
