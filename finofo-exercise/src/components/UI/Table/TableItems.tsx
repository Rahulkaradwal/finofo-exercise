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
  const cellClasses = "border p-1 text-[6px]  sm:text-[8px] md:text-sm";

  return (
    <table className="text-[10px] md:text-xs lg:text-sm w-full table-fixed bg-white">
      <TableHeader />
      <tbody>
        <tr>
          <td colSpan={5}></td>
          <td className={`${cellClasses} flex justify-end items-center`}>
            <Button onClick={() => addGroupToJar(fruits)}>Add All</Button>
          </td>
        </tr>
        {fruits.map((fruit) => (
          <TableItemList key={fruit._id} fruit={fruit} addToJar={addToJar} />
        ))}
      </tbody>
    </table>
  );
}

export default TableItems;
