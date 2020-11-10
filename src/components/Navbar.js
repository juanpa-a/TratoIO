import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useContext(UserContext);
  const userIsLoggedIn = user.name === "" ? false : true;
  const history = useHistory();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Trato.IO</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div
            className={`text-sm lg:flex-grow ${userIsLoggedIn ? "" : "hidden"}`}
          >
            <a
              onClick={() => history.push("/home")}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Home
            </a>
            <a
              onClick={() => history.push("/transfer")}
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Transfer
            </a>
          </div>
          <div className={userIsLoggedIn ? "" : "hidden"}>
            <a
              onClick={() => history.push("/")}
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Log out
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
