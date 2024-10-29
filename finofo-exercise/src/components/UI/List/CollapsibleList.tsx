import React from "react";
import Collapsible from "react-collapsible";
import { Fruit } from "../../../utils/Types";

type CollapsibleListProps = {
  fruits: Record<string, Fruit[]>;
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
};

const CollapsibleList: React.FC<CollapsibleListProps> = ({
  fruits,
  addToJar,
  addGroupToJar,
}) => {
  return (
    <div className="space-y-2">
      {Object.entries(fruits).map(([groupName, fruitsInGroup]) => (
        <Collapsible
          key={groupName}
          trigger={`${groupName} (${fruitsInGroup.length} items)`}
          className="border border-gray-300 rounded-md p-2 bg-gray-100"
        >
          <button
            onClick={() => addGroupToJar(fruitsInGroup)}
            className="px-3 py-1 mb-2 text-white bg-green-500 rounded-md"
          >
            Add All {groupName} to Jar
          </button>
          <ul className="pl-4">
            {fruitsInGroup.map((fruit) => (
              <li
                key={fruit._id}
                className="flex justify-between items-center p-2 bg-gray-200 rounded my-1"
              >
                <span>
                  {fruit.name} ({fruit.nutritions.calories} cal)
                </span>
                <button
                  onClick={() => addToJar(fruit)}
                  className="px-2 py-1 text-white bg-blue-500 rounded"
                >
                  Add
                </button>
              </li>
            ))}
          </ul>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleList;
