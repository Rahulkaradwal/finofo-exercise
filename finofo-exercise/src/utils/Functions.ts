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
