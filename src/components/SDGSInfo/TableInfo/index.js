import React from "react";

const TableInfo = ({ data }) => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Country
            </th>
            <th scope="col" className="py-3 px-6">
              id
            </th>
            <th scope="col" className="py-3 px-6">
              2020 SDG Index Score
            </th>
            <th scope="col" className="py-3 px-6">
              2020 SDG Index Rank
            </th>
            <th scope="col" className="py-3 px-6">
              Regional Score (0-100)
            </th>
            <th scope="col" className="py-3 px-6">
              Regions used for the SDR
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 1 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 2 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 3 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 4 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 5 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 6 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 7 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 8 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 9 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 10 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 11 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 12 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 13 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 14 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 15 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 16 Dash
            </th>
            <th scope="col" className="py-3 px-6">
              Goal 17 Dash
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            return (
              <tr>
                {Object.values(items).map((key) => <td className="py-4 px-6">{key}</td>)}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableInfo;
