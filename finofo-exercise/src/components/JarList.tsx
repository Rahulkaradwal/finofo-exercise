import { useEffect, useState } from "react";
import { Fruit } from "../utils/Types";
import { FruitCounts } from "../utils/Functions";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import JarListItem from "./UI/List/JarListItem";

// Register necessary chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

interface JarListProps {
  jar: Fruit[];
}

function JarList({ jar }: JarListProps) {
  const [caloryCount, setCaloryCount] = useState(0);
  const [chartData, setChartData] = useState<unknown>(null);

  // Count the occurrences of each fruit in the jar
  const fruitCounts = FruitCounts()(jar);
  const fruitEntries = Object.values(fruitCounts);

  useEffect(() => {
    if (fruitEntries.length !== 0) {
      const totalCalories = fruitEntries.reduce(
        (acc, fruit) => acc + fruit.nutritions.calories * fruit.count,
        0
      );

      setCaloryCount(totalCalories);

      // Set up chart data only once when fruitEntries change
      const labels = fruitEntries.map((fruit) => fruit.name);
      const data = fruitEntries.map(
        (fruit) => fruit.nutritions.calories * fruit.count
      );

      setChartData({
        labels,
        datasets: [
          {
            label: "Calorie Distribution",
            data,
            backgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
            ],
            hoverOffset: 4,
          },
        ],
      });
    } else {
      setCaloryCount(0);
      setChartData(null);
    }
  }, [jar]);

  return (
    <div className="p-1 sm:p-2 md:p-3 lg:p-4">
      <h2 className="text-md md:text-xl font-bold mb-4">Jar Contents</h2>
      <p className="mb-1 sm:mb-2 lg:mb-3  md:mb-4 text-xs sm:text-sm md:text-md">
        Total calories: {caloryCount}
      </p>

      {fruitEntries.length > 0 ? (
        <>
          <JarListItem fruitEntries={fruitEntries} />

          {chartData && (
            <div className="mt-4">
              <h3 className="text-xs sm:text-sm lg:text-lg font-bold">
                Calorie Distribution
              </h3>
              <Pie data={chartData} />
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500">The jar is empty.</p>
      )}
    </div>
  );
}

export default JarList;
