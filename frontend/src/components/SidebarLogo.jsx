import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLogo = ({ to, Icon }) => {
  const loc = useLocation();

  // console.log("Location", loc);
  return (
    <Link
      to={to}
      className={`flex items-center justify-center w-12 h-12 mt-2 rounded ${
        loc.pathname.match(new RegExp(`^${to}`, "g"))
          ? "bg-green-300 text-gray-800 hover:bg-green-400 hover:text-gray-800"
          : "bg-gray-100 text-gray-800 hover:bg-green-200 hover:text-gray-900"
      } transition-colors`}
    >
      <Icon className=" w-6 h-6 stroke-current" />
    </Link>
  );
};
export default SidebarLogo;
