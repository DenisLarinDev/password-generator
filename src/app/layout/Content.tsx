import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
};

export const Content = ({ children }: ContentProps) => {
  return (
    <div className={"flex w-full h-full justify-center items-center flex-1"}>
      {children}
    </div>
  );
};
