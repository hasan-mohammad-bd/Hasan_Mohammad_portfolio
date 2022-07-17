import React from "react";
import { NavLink } from "react-router-dom";
import resumePDF from "../img/Hasan_Mohammad_Web_Developer_v3.pdf";
import { AiOutlineDownload } from "@react-icons/all-files/ai/AiOutlineDownload";
import hasan from "../img/hasanWeb2.png";
import { BiHomeAlt } from "@react-icons/all-files/bi/BiHomeAlt";
import { RiLightbulbFlashLine } from "@react-icons/all-files/ri/RiLightbulbFlashLine";
import { AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";
import { AiOutlineContacts } from "@react-icons/all-files/ai/AiOutlineContacts";


const Drower = () => {
  return (
    <div class="drawer md:hidden drawer-end fixed z-40 top-[0px]">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content"></div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 text-base-content bb pt-32 text-white">
          <li>
            <label for="my-drawer-4" class="mr-3 text-gray-400 md:hidden">
              ✕
            </label>
          </li>
          <li>
            <div className="img-holder mx-auto w-[150px]">
              <img className="w-100 avatar" src={hasan} alt="" />
            </div>
          </li>
          <li>
            <a for="" href="#home">
              <BiHomeAlt></BiHomeAlt> Home
            </a>
          </li>
          <li>
            <a for="" className="" href="#skill">
              <RiLightbulbFlashLine></RiLightbulbFlashLine> Skill
            </a>
          </li>
          <li>
            <a className="" href="#project1">
             <AiOutlineFundProjectionScreen></AiOutlineFundProjectionScreen> Project
            </a>
          </li>
          <li>
            <a className="text-white" href="#contact">
              <AiOutlineContacts></AiOutlineContacts> Contact
            </a>
          </li>
          <li className="mt-10">
            <a
              className="btn1 cursor-pointer mx-auto mt-[-10px]"
              download
              href={resumePDF}
            >
              <AiOutlineDownload className="inline-block text-xl" /> Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drower;
