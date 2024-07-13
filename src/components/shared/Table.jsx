import React from "react";
import { useSelector } from "react-redux";

const Table = ({ cols, rows, width  }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div className={`overflow-x-auto overflow-y-clip mx-auto w-full`}>
      {rows && rows.length > 0 ? (
        <table
          className={`min-w-full divide-y divide-gray-200 mt-4 rounded text-start mb-16 ${
            isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          <thead className={`${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
            <tr>
              {cols.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="p-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  <div className="flex items-center">
                    {col.headerButton && col.headerButton()}
                    {col.header}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={`${isDark ? "bg-gray-900" : "bg-white"}`}>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0
                    ? isDark
                      ? "bg-gray-800"
                      : "bg-gray-50"
                    : ""
                }`}
              >
                {cols.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="p-4 w-[500px] text-sm whitespace-nowrap"
                  >
                    <td
                      key={colIndex}
                      className="p-4 w-[500px] text-sm whitespace-nowrap"
                    >
                      {col.render
                        ? col.render(row, rowIndex)
                        : String(row[col.accessor])}
                    </td>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-center mt-5">No data to show</h3>
      )}
    </div>
  );
};

export default Table;
