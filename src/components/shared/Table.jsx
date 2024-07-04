import React from "react";
import { useSelector } from "react-redux";

const Table = ({ cols, rows }) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  return (
    <div className=" overflow-x-scroll sm:overflow-x-auto ">
      {rows && rows?.length > 0 ? (
        <table
          className={`min-w-full divide-y divide-gray-200 mt-4 rounded mb-[65px] ${
            isDark ? "bg-gray-900" : "bg-gray-50 "
          }`}
        >
          <thead>
            <tr>
              {cols.map((col, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {cols.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 whitespace-nowrap text-start"
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
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
