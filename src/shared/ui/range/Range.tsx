import { Slider } from "@mui/material";
import "./range.css";

interface RangeProps {
  min: number;
  max: number;
  onChange: (value: number) => void;
  value: number;
}
export const Range = ({ min, max, onChange, value }: RangeProps) => {
  return (
    <Slider
      sx={{ color: "#A4FFAF" }}
      min={min}
      max={max}
      value={value}
      onChange={(_, value) => {
        const res = value;
        onChange(res as number);
      }}
    />
  );
};
