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
    <div className="flex  w-full justify-between">
      <div className="flex gap-1 items-center">
        <label
          htmlFor="group-by"
          className="text-[7px] sm:text-[10px]   md:text-sm lg:text-md"
        >
          Group by:
        </label>
        <select
          id="group-by"
          value={value}
          onChange={(e) => onChange(e.target.value as GroupByOption)}
          className=" px-2 mt-1 py-2 text-xs  border rounded"
          disabled={disableGrouping}
        >
          <option value="none">None</option>
          <option value="family">Family</option>
          <option value="order">Order</option>
          <option value="genus">Genus</option>
        </select>
      </div>
      <button
        onClick={() => setView(view === "list" ? "table" : "list")}
        className="text-[7px] sm:text-[10px] md:text-sm m-[2px] p-[2px] sm:p-2 bg-gray-300 text-black rounded cursor-pointer"
      >
        {view === "list" ? "Switch to Table View" : "Switch to List View"}
      </button>
    </div>
  );
}

export default ListOperations;
