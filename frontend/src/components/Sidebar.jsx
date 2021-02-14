import React from "react";
import { MdSearch } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { RiBookOpenLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SidebarLogo from "./SidebarLogo";
import Logo from "./Logo";
const Sidebar = (props) => {
  return (
    <div className="flex flex-col items-center w-16 h-screen overflow-hidden text-gray-400 bg-gray-900">
      <Link to="/" className="flex items-center justify-center mt-3">
        <Logo />
      </Link>
      <div className="flex flex-col items-center mt-3 border-t border-gray-700">
        <SidebarLogo to="/home" Icon={MdSearch} />
        <SidebarLogo to="/student" Icon={AiOutlineUser} />
        <SidebarLogo to="/sessions" Icon={RiBookOpenLine} />
      </div>
      <div className="flex flex-col items-center mt-2 border-t border-gray-700">
        {/* Messages and stuff here */}
        <SidebarLogo to="/home" Icon={MdSearch} />
        <SidebarLogo to="/tutor" Icon={AiOutlineUser} />
        <SidebarLogo to="/sessions" Icon={RiBookOpenLine} />
      </div>
    </div>
  );
};
export default Sidebar;
