import React from "react";
import { NavLink } from "react-router-dom";

const Drower = () => {
  return (
    <div class="drawer drawer-end fixed z-40 top-[75px]">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content"></div>
      <div class="drawer-side w-[250px]">
        <label for="my-drawer-4" class="drawer-overlay bb drower-ul"></label>
        <ul class="menu p-4 overflow-y-auto w-80 text-base-content ">
          <li>
            <NavLink for="my-drawer-4" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
            <button className="btn1 w-[200px] mt-10">
              Download Resume
            </button>

        </ul>
      </div>
    </div>
  );
};

export default Drower;
