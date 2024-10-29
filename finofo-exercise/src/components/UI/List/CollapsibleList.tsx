import React from "react";
import Collapsible from "react-collapsible";
import { Fruit } from "../../../utils/Types";
import Button from "../Button";
import FruitListItem from "./FruitListItem";

type CollapsibleListProps = {
  fruits: Record<string, Fruit[]>;
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
};

function CollapsibleList({
  fruits,
  addToJar,
  addGroupToJar,
}: CollapsibleListProps) {
  return (
    <div className="space-y-2">
      {Object.entries(fruits).map(([groupName, fruitsInGroup]) => (
        <Collapsible
          key={groupName}
          trigger={`${groupName} (${fruitsInGroup.length} items)`}
          className="border border-gray-300 rounded-md p-2 bg-gray-100"
        >
          <Button onClick={() => addGroupToJar(fruitsInGroup)}>
            Add All {groupName}
          </Button>

          <ul className="pl-4">
            {fruitsInGroup.map((fruit) => (
              <FruitListItem
                key={fruit._id}
                fruit={fruit}
                addToJar={addToJar}
              />
            ))}
          </ul>
        </Collapsible>
      ))}
    </div>
  );
}

export default CollapsibleList;
