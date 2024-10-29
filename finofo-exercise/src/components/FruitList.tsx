import { useState } from "react";
import { fetchFruits } from "../services/API";
import { useEffect } from "react";
import { Fruit } from "../utils/Types";
import TableItems from "./UI/Table/TableItems";
import ListItems from "./UI/List/ListItems";
import ListOperations from "./UI/List/ListOperations";
import CollapsibleList from "./UI/List/CollapsibleList";

interface FruitListProps {
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
}

function FruitList({ addToJar, addGroupToJar }: FruitListProps) {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [view, setView] = useState<"table" | "list">("list");
  const [groupBy, setGroupBy] = useState<"none" | "family" | "order" | "genus">(
    "none"
  );

  // Load fruits on mount
  useEffect(() => {
    const loadFruits = async () => {
      const data = await fetchFruits();
      setFruits(data);
    };
    loadFruits();
  }, []);

  if (fruits.length === 0) {
    return <div>Loading...</div>;
  }

  // Group fruits by family, order, or genus
  const groupedFruits = fruits.reduce((acc, fruit) => {
    if (groupBy === "family") {
      // Group by family
      acc[fruit.family] = acc[fruit.family] || [];
      acc[fruit.family].push(fruit);
    } else if (groupBy === "order") {
      // Group by order
      acc[fruit.order] = acc[fruit.order] || [];
      acc[fruit.order].push(fruit);
    } else if (groupBy === "genus") {
      // Group by genus
      acc[fruit.genus] = acc[fruit.genus] || [];
      acc[fruit.genus].push(fruit);
    }
    return acc;
  }, {} as Record<string, Fruit[]>);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Fruit List</h2>
        {/* List operations - toggle between list and table and group by */}
        <ListOperations
          value={groupBy}
          onChange={setGroupBy}
          setView={setView}
          view={view}
        />
      </div>
      {groupBy === "none" ? (
        view === "list" ? (
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
        )
      ) : (
        <CollapsibleList
          fruits={groupedFruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      )}
    </div>
  );
}

export default FruitList;
