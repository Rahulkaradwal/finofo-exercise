import { useState } from "react";
import { fetchFruits } from "../services/API";
import { useEffect } from "react";
import { Fruit } from "../utils/Types";
import { FaListUl, FaTable } from "react-icons/fa";
import TableItems from "./UI/Table/TableItems";
import ListItems from "./UI/List/ListItems";

interface FruitListProps {
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
}

function FruitList({ addToJar, addGroupToJar }: FruitListProps) {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [view, setView] = useState<"table" | "list">("list");

  // Load fruits on mount
  useEffect(() => {
    const loadFruits = async () => {
      const data = await fetchFruits();
      setFruits(data);
    };
    loadFruits();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Fruit List</h2>
        {/* Toggle between list and table */}
        <button
          className="p-2 cursor-pointer scale-150 "
          onClick={() => setView(view === "list" ? "table" : "list")}
        >
          {view === "list" ? <FaTable /> : <FaListUl />}
        </button>
      </div>

      {view === "list" ? (
        <ListItems
          fruits={fruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      ) : (
        <TableItems
          fruits={fruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      )}
    </div>
  );
}

export default FruitList;
