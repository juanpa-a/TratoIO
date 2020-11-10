import React from "react";

const Table = ({size = "xl", data = []}) => {
  const getHeaders = (data) => {
    if (data.length > 0) {
      return Object.keys(data[0]);
    } else return ["No data."];
  };

  const parseAmount = ({ currency, value }) => `${currency}${value}`;

  const renderTable = (body, i) => {
    return getHeaders(body).map((elem) => {
      return (
        <td className="border px-2 py-2">
          {elem === "amount" || elem === "balance" ? parseAmount(body[i][elem]) : body[i][elem]}
        </td>
      );
    });
  };

  return (
    <div className={`max-w-${size} m-auto mt-12 mb-12 bg-white shadow-md rounded`}>
      <table className="table-auto">
        <thead>
          <tr>
            {getHeaders(data).map((header) => {
              return (
                <th className={`w-1/${data.length} bg-blue-400 px-4 py-2`}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((_, i) => {
            return (
              <tr className={`${i%2 === 0 ? "bg-gray-100" : "bg-white"}`}>{renderTable(data, i)}</tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;