import { useState, useEffect, useCallback } from "react";
import { fetchFruits } from "../services/API";
import { Fruit } from "../utils/Types";
import TableItems from "./UI/Table/TableItems";
import ListItems from "./UI/List/ListItems";
import ListOperations from "./UI/List/ListOperations";
import CollapsibleList from "./UI/List/CollapsibleList";
import Spinner from "./UI/Spinner";
import ErrorBoundary from "./UI/ErrorBoundary";
import { GroupFruits } from "../utils/Functions";

interface FruitListProps {
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
  view: "table" | "list";
  setView: (view: "table" | "list") => void;
}

function FruitList({ addToJar, addGroupToJar, view, setView }: FruitListProps) {
  const [fruits, setFruits] = useState<Fruit[]>([]);
  const [groupBy, setGroupBy] = useState<"none" | "family" | "order" | "genus">(
    "none"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFruits = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchFruits();
        setFruits(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    loadFruits();
  }, []);

  // Group fruits based on selected option
  const groupedFruits = GroupFruits(fruits, groupBy);

  // Render the selected list type
  const renderListContent = useCallback(() => {
    if (view === "list") {
      // Render collapsible list if grouped, flat list otherwise
      return groupBy === "none" ? (
        <ListItems
          fruits={fruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      ) : (
        <CollapsibleList
          fruits={groupedFruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      );
    } else if (view === "table") {
      // Render table view, regardless of grouping
      return (
        <TableItems
          fruits={fruits}
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
        />
      );
    }
  }, [view, groupBy, fruits, groupedFruits, addToJar, addGroupToJar]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen text-center">
        <h1 className="text-xl font-bold">Oops! Something went wrong.</h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="p-4  h-screen">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm md:text-md lg:text-xl font-bold">
            Fruit List
          </h2>
          <ListOperations
            value={groupBy}
            onChange={setGroupBy}
            setView={setView}
            view={view}
            disableGrouping={view === "table"} // Disable grouping in table view
          />
        </div>
        <div className="overflow-y-scroll ]">{renderListContent()}</div>
      </div>
    </ErrorBoundary>
  );
}

export default FruitList;
