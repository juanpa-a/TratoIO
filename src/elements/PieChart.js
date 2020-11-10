import React, { useContext, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import transactions from "../mock_data/transactions";
import { UserContext } from "../context/UserContext";

const PieChart = () => {
  const [user, setUser] = useContext(UserContext);

  const getLabels = (data, label) => {
    const res = {};
    data.forEach((elem) => {
      if (elem.hasOwnProperty(label)) {
        res[elem[label]] = true;
      }
    });
    return Object.keys(res);
  };

  const labels = getLabels(transactions, "toAccount");

  const getValues = (data, prop) => {
    const values = [];
    labels.forEach((label) => {
      let value = 0;
      data.forEach((val) => {
        if (parseFloat(val[prop]) === parseFloat(label)) {
          value += parseFloat(val["amount"]["value"]);
        }
      });
      values.push(value);
      value = 0;
    });
    return values;
  };

  const parseData = (data) => {
    const res = {
      labels: getLabels(data, "toAccount"),
      datasets: [
        {
          data: getValues(transactions, "toAccount"),
          backgroundColor: ["#ff495c", "#e9c46a", "#777da7", "#e76f51"],
          hoverBackgroundColor: ["#ff495c", "#e9c46a", "#777da7", "#e76f51"],
        },
      ],
    };
    return res;
  };

  useEffect(() => {
    const destinationAccounts = getLabels(transactions, "toAccount");
    const originAccounts = getLabels(transactions, "fromAccount");

    setUser({
      ...user,
      originAccounts: originAccounts,
      destinationAccounts: destinationAccounts,
    });
  }, []);

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 15,
      },
    },
  };

  return (
    <div id="pie-chart" className="max-w-lg m-auto bg-white p-10">
      <Pie
        data={parseData(transactions)}
        height={350}
        width={350}
        options={options}
      />
    </div>
  );
};

export default PieChart;
