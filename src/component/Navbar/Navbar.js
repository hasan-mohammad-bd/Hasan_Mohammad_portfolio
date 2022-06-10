import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hasan-logo.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div class="dropdown md:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
              <Link to="/skills">Skills</Link>
              </li>
              <li>
              <Link className="blogs" to="/portfolio">
              Blogs
            </Link>
              </li>
            </ul>
          </div>
          <div className="nav hidden md:block">
            <Link to="/home">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/skills">Skills</Link>
            <Link className="blogs" to="/portfolio">
              Blogs
            </Link>
          </div>
          <div className="logo-holder">
            <img className="w-[100px] md:w-[120px]" src={logo} alt="" />
          </div>
          <div>
            <button className="btn lg:ml-[150px]">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
