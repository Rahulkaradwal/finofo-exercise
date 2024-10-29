import { Fruit } from "../../../utils/Types";
import Button from "../Button";

type FruitListItemProps = {
  fruit: Fruit;
  addToJar: (fruit: Fruit) => void;
};

const listItemClasses =
  "flex justify-between  items-center bg-gray-100 p-1 sm:p-2 md:p-2 lg:p-3 rounded shadow";
const textClasses = "text-[10px] sm:text-[12px] md:text-sm";

function FruitListItem({ fruit, addToJar }: FruitListItemProps) {
  return (
    <li key={fruit._id} className={listItemClasses}>
      <span className={textClasses}>
        {fruit.name} ({fruit.nutritions.calories} cal)
      </span>

      <Button onClick={() => addToJar(fruit)}>Add</Button>
    </li>
  );
}

export default FruitListItem;
