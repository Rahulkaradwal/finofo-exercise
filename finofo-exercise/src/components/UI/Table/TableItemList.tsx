import { Fruit } from "../../../utils/Types";
import Button from "../Button";

type TableItemListProps = {
  fruit: Fruit;
  addToJar: (fruit: Fruit) => void;
};

// Define a variable for shared Tailwind classes
const cellClasses =
  "border p-1 overflow-x-auto  text-[6px] sm:text-[8px] md:text-sm";

function TableItemList({ fruit, addToJar }: TableItemListProps) {
  return (
    <tr>
      <td className={cellClasses}>{fruit.name}</td>
      <td className={cellClasses}>{fruit.family}</td>
      <td className={cellClasses}>{fruit.order}</td>
      <td className={cellClasses}>{fruit.genus}</td>
      <td className={cellClasses}>{fruit.nutritions.calories}</td>
      <td className={`${cellClasses} flex justify-end items-center`}>
        <Button onClick={() => addToJar(fruit)}>Add</Button>
      </td>
    </tr>
  );
}

export default TableItemList;
