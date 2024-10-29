import { FruitWithCount } from "../../../utils/Types";

type JarListItemProps = {
  fruitEntries: FruitWithCount[];
};

const containerClasses =
  "space-y-2 p-1 sm:p-2 md:p-3 lg:p-4 h-fit overflow-y-scroll";
const listItemClasses =
  "flex justify-between items-center bg-gray-100 p-1 sm:p-2 md:p-2 lg:p-3 rounded shadow";
const textClasses = "text-[10px] sm:text-[12px] md:text-sm";

function JarListItem({ fruitEntries }: JarListItemProps) {
  return (
    <ul className={containerClasses}>
      {fruitEntries.map(({ _id, name, nutritions, count }) => (
        <li key={_id} className={listItemClasses}>
          <span className={textClasses}>
            {name} ({nutritions.calories} cal) x {count}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default JarListItem;
