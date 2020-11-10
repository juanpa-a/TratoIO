import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Greet = () => {
    const [user] = useContext(UserContext);
    return (
        <div className="m-32">
                <h1 className="text-2xl text-center text-gray-700">Welcome to your online banking {user.name}</h1>
        </div>
    )
} 

export default Greet;