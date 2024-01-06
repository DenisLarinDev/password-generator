type CheckBoxProps = {
  isChecked: boolean;
  label: string;
  onChange: (value: boolean) => void;
};

export const CheckBox = ({ isChecked, label, onChange }: CheckBoxProps) => {
  return (
    <label className={"flex gap-6 cursor-pointer"}>
      <input
        type="checkbox"
        checked={isChecked}
        className={"hidden"}
        onChange={(event) => onChange(event.target.checked)}
      />
      {isChecked ? (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="20" fill="#A4FFAF" />
          <path
            d="M4 10.6066L7.39341 14L15.3934 6"
            stroke="#18171F"
            strokeWidth="3"
          />
        </svg>
      ) : (
        <div className={"w-[20px] h-[20px] border-2 border-white"} />
      )}

      <span className={"text-almostWhite text-body select-none"}>{label}</span>
    </label>
  );
};
