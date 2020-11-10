import React from "react";
import PieChart from "../elements/PieChart"

const TransactionHistory = () => {
    return (
        <div className="max-w-sm m-auto mt-4 bg-white shadow-md rounded">
            <PieChart />
            <h1 className="text-lg text-center text-gray-700 m-2">Transactions History</h1>
            <p className="text-sm p-4 text-gray-700 m-2">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Curabitur quis euismod nisl, 
                sit amet semper eros. Quisque scelerisque est sit amet nulla cursus finibus. 
                Nulla sed odio accumsan, ullamcorper purus quis, sagittis ex. Aliquam ac arcu blandit, 
            </p>
        </div>
    )
}

export default TransactionHistory;