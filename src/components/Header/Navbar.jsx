import React from "react";
import logoImg from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto bg-base-100 shadow-sm">
      <div className="navbar-start flex items-center">
        <img className="h-[40px] w-[40px]" src={logoImg} alt="" />
        <a className="btn btn-ghost text-xl font-bold text-blue-700 px-2">
          HERO.IO
        </a>
      </div>

      <div className="navbar-center">
        <ul className="menu flex-col items-center justify-center gap-2 lg:menu-horizontal lg:gap-5">
          <li>
            <a className="text-[16px] font-normal">Homes</a>
          </li>
          <li>
            <a className="text-[16px] font-normal">Apps</a>
          </li>
          <li>
            <a className="text-[16px] font-normal">Installation</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Takdirul-Rijan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <img
            className="h-[30px] w-[30px] rounded-full"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />
          <span className="text-[16px] font-[600] text-white">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
