import { Fruit } from "../../../utils/Types";
import Button from "../Button";

type FruitListItemProps = {
  fruit: Fruit;
  addToJar: (fruit: Fruit) => void;
};

function FruitListItem({ fruit, addToJar }: FruitListItemProps) {
  return (
    <li
      key={fruit._id}
      className="flex justify-between p-2 my-1 rounded bg-gray-200 items-center"
    >
      <span>
        {fruit.name} ({fruit.nutritions.calories} cal)
      </span>

      <Button onClick={() => addToJar(fruit)}>Add</Button>
    </li>
  );
}

export default FruitListItem;
