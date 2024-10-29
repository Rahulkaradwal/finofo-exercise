import { Fruit } from "./Types";

// Count the occurrences of each fruit in the jar
export const FruitCounts = () => (jar: Fruit[]) =>
  jar.reduce((acc, fruit) => {
    if (acc[fruit._id]) {
      acc[fruit._id].count += 1;
    } else {
      acc[fruit._id] = { ...fruit, count: 1 };
    }
    return acc;
  }, {} as Record<string, Fruit & { count: number }>);

// Group fruits by family, order, or genus
export const GroupFruits = (
  fruits: Fruit[],
  groupBy: string
): Record<string, Fruit[]> => {
  return fruits.reduce((acc, fruit) => {
    if (groupBy === "family") {
      acc[fruit.family] = acc[fruit.family] || [];
      acc[fruit.family].push(fruit);
    } else if (groupBy === "order") {
      acc[fruit.order] = acc[fruit.order] || [];
      acc[fruit.order].push(fruit);
    } else if (groupBy === "genus") {
      acc[fruit.genus] = acc[fruit.genus] || [];
      acc[fruit.genus].push(fruit);
    }
    return acc;
  }, {} as Record<string, Fruit[]>);
};
