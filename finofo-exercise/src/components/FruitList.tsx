import { useState, useEffect } from "react";
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
  // const [view, setView] = useState<"table" | "list">("list");
  const [groupBy, setGroupBy] = useState<"none" | "family" | "order" | "genus">(
    "none"
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFruits = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const data = await fetchFruits();
        setFruits(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };
    loadFruits();
  }, []);

  // function call to group fruits by family, order, or genus
  const groupedFruits = GroupFruits(fruits, groupBy);

  return (
    <ErrorBoundary>
      <div className="p-1">
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : error ? (
          <div className="flex gap-4 justify-center flex-col items-center">
            <h1 className="text-xl font-bold ">Oops! Something went wrong.</h1>
            <p className="text-red-600">{error}</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Fruit List</h2>
              <ListOperations
                value={groupBy}
                onChange={setGroupBy}
                setView={setView}
                view={view}
              />
            </div>
            <div className="overflow-y-scroll h-screen">
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
          </>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default FruitList;
