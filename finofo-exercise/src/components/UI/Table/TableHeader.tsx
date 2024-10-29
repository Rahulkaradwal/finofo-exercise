function TableHeader() {
  const cellClasses = "border  p-1 text-[6px] sm:text-[8px] md:text-sm";

  return (
    <thead>
      <tr>
        <th className={cellClasses}>Name</th>

        <th className={cellClasses}>Family</th>
        <th className={cellClasses}>Order</th>
        <th className={cellClasses}>Genus</th>
        <th className={cellClasses}>Calories</th>
        <th className={cellClasses}>Actions</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
