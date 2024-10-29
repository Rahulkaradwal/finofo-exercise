type GroupByOption = "none" | "family" | "order" | "genus";

type GroupByProps = {
  value: GroupByOption;
  onChange: (value: GroupByOption) => void;
};

const options: { label: string; value: GroupByOption }[] = [
  { label: "None", value: "none" },
  { label: "Family", value: "family" },
  { label: "Order", value: "order" },
  { label: "Genus", value: "genus" },
];

const labelClasses = "text-xs md:text-sm lg:text-md ml-4";
const selectClasses =
  "ml-2 px-2 py-1 text-xs sm:text-sm md:text-md border rounded";

function GroupBy({ value, onChange }: GroupByProps) {
  return (
    <label className={labelClasses}>
      Group by:
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as GroupByOption)}
        className={selectClasses}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default GroupBy;
