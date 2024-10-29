import { FaTable, FaListUl } from "react-icons/fa";
import GroupBy from "./GroupBy";

type ListOperationsProps = {
  value: "none" | "family" | "order" | "genus";
  onChange: (value: "none" | "family" | "order" | "genus") => void;
  view: "list" | "table";
  setView: (view: "list" | "table") => void;
};

function ListOperations({
  value,
  onChange,
  view,
  setView,
}: ListOperationsProps) {
  return (
    <>
      {/* Group by family, order, or genus */}

      <GroupBy value={value} onChange={onChange} />

      {/* Toggle between list and table */}
      <button
        className="p-2 cursor-pointer scale-150"
        onClick={() => setView(view === "list" ? "table" : "list")}
      >
        {view === "list" ? <FaTable /> : <FaListUl />}
      </button>
    </>
  );
}

export default ListOperations;
