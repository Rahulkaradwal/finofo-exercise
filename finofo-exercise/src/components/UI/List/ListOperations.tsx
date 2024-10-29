type GroupByOption = "none" | "family" | "order" | "genus";

type ListOperationsProps = {
  value: GroupByOption;
  onChange: (value: GroupByOption) => void;
  setView: (view: "table" | "list") => void;
  view: "table" | "list";
  disableGrouping?: boolean;
};

function ListOperations({
  value,
  onChange,
  setView,
  view,
  disableGrouping,
}: ListOperationsProps) {
  return (
    <div className="flex items-center space-x-4">
      <label className="text-xs md:text-sm lg:text-md ml-4">
        Group by:
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as GroupByOption)}
          className="ml-2 px-2 py-1 text-xs sm:text-sm md:text-md border rounded"
          disabled={disableGrouping}
        >
          <option value="none">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </select>
      </label>
      <button
        onClick={() => setView(view === "list" ? "table" : "list")}
        className="text-[8px] sm:text-xs md:text-sm px-2 py-1 cursor-pointer bg-gray-300 text-black rounded"
      >
        {view === "list" ? "Switch to Table View" : "Switch to List View"}
      </button>
    </div>
  );
}

export default ListOperations;
