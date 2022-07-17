import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/hasan-logo2.png";
import { AiOutlineDownload } from "@react-icons/all-files/ai/AiOutlineDownload";
import resume from "../img/Hasan_Mohammad_Web_Developer_v3 (1).png";
import resumePDF from "../img/Hasan_Mohammad_Web_Developer_v3.pdf";

const Header = () => {

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
          <a className="hidden md:block" href="#skill">
            Skill
          </a>
          <a className="hidden md:block" href="#project1">
            Project
          </a>
          <a className="hidden md:block" href="#contact">
            Contact
          </a>
        </div>
        <button className="btn1 bg-blue-700 hidden mr-1 md:block">
          <label for="my-modal-5" class="">
            <AiOutlineDownload className="inline-block text-xl" /> Resume
          </label>
        </button>
        <label
        
          for="my-drawer-4"
          class="mr-3 text-gray-400 md:hidden"
        >
          <svg
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
          </svg>
        </label>
      </div>

      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box max-w-2xl">
          <label
            for="my-modal-5"
            class="btn btn-sm btn-circle sticky right-2 top-2 bb"
          >
            ✕
          </label>
          <img src={resume} alt="" />
          <div class="modal-action bg-fixed">
            <a
              className="btn1 cursor-pointer mx-auto mt-[-10px]"
              download
              href={resumePDF}
            >
              <AiOutlineDownload className="inline-block text-xl" /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
