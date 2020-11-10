import React from "react";

const Form = ({transactions, balance  }) => {
  const getLabels = (data, label) => {
    const res = {};
    data.forEach((elem) => {
      if (elem.hasOwnProperty(label)) {
        res[elem[label]] = true;
      }
    });
    return Object.keys(res);
  };

  const getValue = (account) => {
    let amount;
    for (let i = 0; i < balance.length; i++) {
      if (balance[i].account === account) {
        amount = balance[i].balance.value;
      } else account = "hi";
    }
    return amount;
  };

  return (
    <div className="w-full max-w-md m-auto">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="originAccount"
          >
            Origin Account
          </label>
          <select
            id="originAccount"
            className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="Origin Accounts"
          >
            {getLabels(transactions, "fromAccount").map((elem) => (
              <option value={elem}>{elem}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="destinationAccount"
          >
            Destination Account
          </label>

          <select
            id="destinationAccount"
            className="block appearance-none w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="Destination Accounts"
          >
            {getLabels(transactions, "toAccount").map((elem) => (
              <option value={elem}>{elem}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="transferAmount"
          >
            Destination Account
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="transferAmount"
            type="number"
            placeholder="500"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              document.getElementById("originAccount").value = "";
              document.getElementById("destinationAccount").value = "";
              document.getElementById("transferAmount").value = "";
            }}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              const origin = document.getElementById("originAccount").value;
              const amount = document.getElementById("transferAmount").value;
              if ( getValue(origin) < amount ) alert("You don't have sufficient funds")
              else alert("Succesfull transaction")
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
