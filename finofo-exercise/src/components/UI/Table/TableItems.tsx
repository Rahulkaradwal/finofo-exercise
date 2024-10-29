import { Fruit } from "../../../utils/Types";
import Button from "../Button";
import TableHeader from "./TableHeader";
import TableItemList from "./TableItemList";

type TableItemsProps = {
  fruits: Fruit[];
  addToJar: (fruit: Fruit) => void;
  addGroupToJar: (fruits: Fruit[]) => void;
};

function TableItems({ fruits, addToJar, addGroupToJar }: TableItemsProps) {
  return (
    <table className="min-w-full bg-white">
      <TableHeader />
      <tbody>
        <tr>
          <td colSpan={5}></td>
          <td className="border px-4 py-2 text-center">
            <Button onClick={() => addGroupToJar(fruits)}>Add All</Button>
          </td>
        </tr>
        {fruits.map((fruit) => (
          <TableItemList fruit={fruit} addToJar={addToJar} />
        ))}
      </tbody>
    </table>
  );
}

export default TableItems;
