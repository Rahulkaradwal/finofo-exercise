import { Fruit } from "../utils/Types";

interface JarListProps {
  jar: Fruit[];
}

function JarList({ jar }: JarListProps) {
  // Count the occurrences of each fruit in the jar
  const fruitCounts = jar.reduce((acc, fruit) => {
    if (acc[fruit._id]) {
      acc[fruit._id].count += 1;
    } else {
      acc[fruit._id] = { ...fruit, count: 1 };
    }
    return acc;
  }, {} as Record<string, Fruit & { count: number }>);

  const fruitEntries = Object.values(fruitCounts);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Jar Contents</h2>
      {fruitEntries.length > 0 ? (
        <ul className="space-y-2">
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
      ) : (
        <p className="text-gray-500">The jar is empty.</p>
      )}
    </div>
  );
}

export default JarList;
