import React from "react";

import Greet from "../components/Greet";
import TransactionHistory from "../components/TransactionsHistory";
import MainExpenses from "../components/MainExpenses";
import CurrentBalance from "../components/CurrentBalance";

import balance from "../mock_data/balance"

const Home = () => {
  return (
    <>
      <Greet />
      <div className="grid grid-cols-3">
        <TransactionHistory />
        <MainExpenses />
        <CurrentBalance balance={balance}/>
      </div>
    </>
  );
};

export default Home;