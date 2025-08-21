
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function DataTable({ data = [], columns, loading, onRowSelect }) {
  const [sortCol, setSortCol] = useState(null);
  const [sortDir, setSortDir] = useState("asc");

  const sortedData = [...data].sort((a, b) => {
    if (!sortCol) return 0;
    if (a[sortCol] < b[sortCol]) return sortDir === "asc" ? -1 : 1;
    if (a[sortCol] > b[sortCol]) return sortDir === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-gray-900 dark:text-gray-100">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            
            <th className="px-4 py-2 text-left text-sm font-semibold w-10" />
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-2 text-left text-sm font-semibold cursor-pointer select-none"
                onClick={() => {
                  if (sortCol === col) {
                    setSortDir(sortDir === "asc" ? "desc" : "asc");
                  } else {
                    setSortCol(col);
                    setSortDir("asc");
                  }
                }}
                title={`Sort by ${col}`}
              >
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {loading ? (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-4 text-center text-sm opacity-80">
                Loading...
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} className="px-4 py-4 text-center text-sm opacity-80">
                No data available
              </td>
            </tr>
          ) : (
            sortedData.map((row, i) => (
              <tr
                key={row.id || i}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <td className="px-4 py-3 align-middle">
                  <input
                    type="checkbox"
                    aria-label={`Select row ${i + 1}`}
                    onChange={() => onRowSelect?.(row)}
                  />
                </td>
                {columns.map((col) => (
                  <td key={col} className="px-4 py-3 align-middle">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  onRowSelect: PropTypes.func,
};
