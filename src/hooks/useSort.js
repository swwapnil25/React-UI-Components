// src/hooks/useSort.js
import { useState } from "react";

/**
 * useSort - simple client-side sorting hook
 * @param {Array} initialData
 */
export function useSort(initialData = []) {
  const [data, setData] = useState(initialData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });

    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setData(sorted);
  };

  return { data, setData, requestSort, sortConfig };
}
