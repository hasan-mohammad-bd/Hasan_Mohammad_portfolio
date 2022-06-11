import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/hasan-logo.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          <div className="dropdown md:hidden">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <Link to="/home">Home</Link>
              </li>
              <li>
              <a href="#skill">Skill</a>
              </li>
              <li>
              <a href="#project">Project</a>
              </li>
              <li>
              <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav hidden md:block">
            <Link to="/home">Home</Link>
            <a href="#skill">Skill</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="logo-holder">
            <img className="w-[100px] md:w-[120px]" src={logo} alt="" />
          </div>
          <div>
            <button className="btn lg:ml-[150px]"><a target="_blank" href="https://drive.google.com/file/d/10Jsns5fVdU2KylzvMhi-W7wMLeCPo3o0/view?usp=sharing">Download Resume</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
