import React from "react";

const MainExpenses = () => {
    return (
        <div className="max-w-sm m-auto mt-4 bg-white shadow-md rounded">
            <img className="object-contain h-64 w-full p-4 pt-8" src="https://via.placeholder.com/320x200" alt="Main expenses graph" />
            <h1 className="text-lg text-center text-gray-700 m-2">Main Expenses</h1>
            <p className="text-sm p-4 text-gray-700 m-2">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Curabitur quis euismod nisl, 
                sit amet semper eros. Quisque scelerisque est sit amet nulla cursus finibus. 
                Nulla sed odio accumsan, ullamcorper purus quis, sagittis ex. Aliquam ac arcu blandit, 
                mattis leo sed, lobortis sem. Sed vitae varius orci. 
                Maecenas cursus consequat enim sed eleifend. Etiam egestas sodales urna, 
                vel molestie neque fringilla interdum. Nam vitae erat dui.
            </p>
        </div>
    )
}

export default MainExpenses;