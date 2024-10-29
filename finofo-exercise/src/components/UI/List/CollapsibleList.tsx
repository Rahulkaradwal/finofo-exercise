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
    <div className=" space-y-1 sm:space-y-2">
      {Object.entries(fruits).map(([groupName, fruitsInGroup]) => (
        <Collapsible
          key={groupName}
          trigger={`${groupName} (${fruitsInGroup.length} items)`}
          className="border text-xs sm:text-sm border-gray-300 rounded-md  m-1 p-1 sm:p-2 bg-gray-100"
        >
          <span className="flex justify-end mt-4">
            <Button onClick={() => addGroupToJar(fruitsInGroup)}>
              Add All {groupName}
            </Button>
          </span>

          <ul className="pl-2 sm:pl-4 flex flex-col  gap-1 mt-2">
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
