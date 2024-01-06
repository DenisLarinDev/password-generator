import { ReactNode } from "react";
import { Content } from "./Content.tsx";

type ContentProps = {
  children: ReactNode;
};

export const Page = ({ children }: ContentProps) => {
  return (
    <div className={"container mx-auto w-screen min-h-screen flex flex-col"}>
      <Content>{children}</Content>
    </div>
  );
};
