type GroupByProps = {
  value: "none" | "family" | "order" | "genus";
  onChange: (value: "none" | "family" | "order" | "genus") => void;
};
function GroupBy({ value, onChange }: GroupByProps) {
  return (
    <>
      <label className="ml-4">
        Group by:
        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value as "none" | "family" | "order" | "genus")
          }
          className="ml-2 px-2 py-1 border rounded"
        >
          <option value="none">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </select>
      </label>
    </>
  );
}

export default GroupBy;
