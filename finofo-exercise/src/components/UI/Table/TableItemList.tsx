import { Fruit } from "../../../utils/Types";
import Button from "../Button";

type TableItemListProps = {
  fruit: Fruit;
  addToJar: (fruit: Fruit) => void;
};
function TableItemList({ fruit, addToJar }: TableItemListProps) {
  return (
    <tr key={fruit._id}>
      <td className="border px-4 py-2">{fruit.name}</td>
      <td className="border px-4 py-2">{fruit.family}</td>
      <td className="border px-4 py-2">{fruit.order}</td>
      <td className="border px-4 py-2">{fruit.genus}</td>
      <td className="border px-4 py-2">{fruit.nutritions.calories}</td>
      <td className="border px-4 py-2">
        <Button onClick={() => addToJar(fruit)}>Add</Button>
      </td>
    </tr>
  );
}

export default TableItemList;
