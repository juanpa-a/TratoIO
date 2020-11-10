import React from "react";

import transactions from "../mock_data/transactions";
import balance from "../mock_data/balance";

import PieChart from "../elements/PieChart";
import Table from "../elements/Table";
import Form from "../elements/Form";

const Transfer = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <Form transactions={transactions} balance={balance}/>
        <PieChart />
      </div>
      <div className="grid grid-cols-1">
        <Table data={transactions}/>
      </div>
    </>
  );
};

export default Transfer;
