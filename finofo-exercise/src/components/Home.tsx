import { useState } from "react";
import FruitList from "./FruitList";
import JarList from "./JarList";
import { Fruit } from "../utils/Types";

function Home() {
  const [jar, setJar] = useState<Fruit[]>([]);
  const [view, setView] = useState<"table" | "list">("list");

  // Add a fruit to the jar
  const addToJar = (fruit: Fruit) => {
    setJar([...jar, fruit]);
  };

  // Add a group of fruits to the jar
  const addGroupToJar = (fruits: Fruit[]) => {
    setJar([...jar, ...fruits]);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Fruit List */}
      <div
        className={`${
          view === "table" ? "w-2/3" : "w-1/2"
        } border-r p-1 sm:p-2 md:p-3 lg:p-4 h-full overflow-y-scroll`}
      >
        <FruitList
          addToJar={addToJar}
          addGroupToJar={addGroupToJar}
          view={view}
          setView={setView}
        />
      </div>

      {/* Right Section - Jar List */}
      <div
        className={`${
          view === "table" ? "w-1/3" : "w-1/2"
        } p-1 sm:p-2 md:p-3 lg:p-4 h-full overflow-y-scroll`}
      >
        <JarList jar={jar} />
      </div>
    </div>
  );
}

export default Home;
