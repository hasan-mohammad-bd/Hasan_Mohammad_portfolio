import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/hasan-logo2.png";
import { AiOutlineDownload } from "@react-icons/all-files/ai/AiOutlineDownload";

const Header = () => {
    const [menu, setMenu] = useState(true);


  return (
    <div className="nav">
      <div className="nav-body max-w-[800px] mx-auto bbb p-2 flex items-center justify-between">
        <div className="flex items-center nav-items1">
          <div className="logo-holder">
            <img className="w-10 App-logo" src={logo} alt="" />
          </div>
          <NavLink className="hidden md:block" to="/home">
            Home
          </NavLink>
          <NavLink className="hidden md:block" to="/blogs">
            Blogs
          </NavLink>
          <NavLink className="hidden md:block" to="/about">
            About
          </NavLink>
        </div>
        <button className="btn1 bg-blue-700 hidden mr-1 md:block">
          <AiOutlineDownload className="inline-block text-xl"/> Resume
        </button>
        <label onClick={()=>{setMenu(!menu)}} for="my-drawer-4" class="mr-3 text-gray-400 md:hidden">
            {menu?           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg> : <label for="my-modal-3" class="ml-3">✕</label>}
        </label>
      </div>

    </div>
  );
};

export default Header;
