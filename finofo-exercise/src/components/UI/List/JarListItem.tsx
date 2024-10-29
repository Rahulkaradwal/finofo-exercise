import { FruitWithCount } from "../../../utils/Types";

type JarListItemProps = {
  fruitEntries: FruitWithCount[];
};

function JarListItem({ fruitEntries }: JarListItemProps) {
  return (
    <ul className="space-y-2 p-4 h-fit overflow-y-scroll ">
      {fruitEntries.map((fruit) => (
        <li
          key={fruit._id}
          className="flex justify-between items-center bg-gray-100 p-2 rounded shadow"
        >
          <span>
            {fruit.name} ({fruit.nutritions.calories} cal) x {fruit.count}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default JarListItem;
