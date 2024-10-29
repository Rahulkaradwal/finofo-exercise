import { Fruit } from "../../../utils/Types";
import Button from "../Button";
import FruitListItem from "./FruitListItem";

type FruitListItemProps = {
  fruits: Fruit[];
  addToJar: (fruit: Fruit) => void;
  addGroupToJar?: (fruits: Fruit[]) => void;
};

function ListItems({ fruits, addToJar, addGroupToJar }: FruitListItemProps) {
  return (
    <ul className="space-y-2">
      <li className="flex justify-between items-center">
        <span>Fruits</span>
        {addGroupToJar && (
          <Button onClick={() => addGroupToJar(fruits)}>Add All</Button>
        )}
      </li>
      {fruits.map((fruit) => (
        <FruitListItem key={fruit._id} fruit={fruit} addToJar={addToJar} />
      ))}
    </ul>
  );
}

export default ListItems;
