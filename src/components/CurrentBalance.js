import React from "react";
import Table from "../elements/Table";

const CurrentBalance = ({balance}) => {
    return (
        <div className="max-w-sm m-auto mt-4 bg-white shadow-md rounded">
            <h1 className="text-lg text-center text-gray-700 m-2">Current Balance</h1>
            <p className="text-sm p-4 text-gray-700 m-2">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Curabitur quis euismod nisl, 
                sit amet semper eros. Quisque scelerisque est sit amet nulla cursus finibus. 
                Nulla sed odio accumsan, ullamcorper purus quis, sagittis ex. Aliquam ac arcu blandit, 
            </p>
            <Table size={"xs"} data={balance}/>
        </div>
    )
}

export default CurrentBalance;