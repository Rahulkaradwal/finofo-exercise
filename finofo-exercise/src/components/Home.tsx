import { useState } from "react";
import FruitList from "./FruitList";
import JarList from "./JarList";
import { Fruit } from "../utils/Types";

function Home() {
  const [jar, setJar] = useState<Fruit[]>([]);

  // Add a fruit to the jar
  const addToJar = (fruit: Fruit) => {
    setJar([...jar, fruit]);
  };

  // Add a group of fruits to the jar
  const addGroupToJar = (fruits: Fruit[]) => {
    setJar([...jar, ...fruits]);
  };

  return (
    <div className="flex">
      <div className="w-1/2 border-r p-4">
        <FruitList addToJar={addToJar} addGroupToJar={addGroupToJar} />
      </div>

      <div className="w-1/2 p-4">
        <JarList jar={jar} />
      </div>
    </div>
  );
}

export default Home;
