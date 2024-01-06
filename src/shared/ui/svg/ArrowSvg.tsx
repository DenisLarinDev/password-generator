import { SVGProps } from "react";

type ArrowSvgProps = { color?: string } & SVGProps<SVGSVGElement>;

export const ArrowSvg = ({
  width = 12,
  height = 12,
  color = "#A4FFAF",
  ...props
}: ArrowSvgProps) => {
  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
        fill={color}
      />
    </svg>
  );
};
