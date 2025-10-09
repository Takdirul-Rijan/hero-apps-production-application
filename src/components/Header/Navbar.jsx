import React from "react";
import logoImg from "../../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar max-w-7xl mx-auto bg-base-100 shadow-sm">
      <div className="navbar-start flex items-center">
        <img className="h-[40px] w-[40px]" src={logoImg} alt="" />

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "btn btn-ghost text-xl font-bold text-blue-700 px-2"
              : "btn btn-ghost text-xl font-bold text-blue-700 px-2"
          }
        >
          HERO.IO
        </NavLink>
      </div>

      <div className="navbar-center">
        <ul className="menu flex-col items-center justify-center gap-2 lg:menu-horizontal lg:gap-5">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-semibold border-b-2 border-blue-700"
                  : "text-[16px] font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/allapps"}
              className={({ isActive }) =>
                isActive
                  ? "text-[16px] font-semibold border-b-2 border-blue-700"
                  : "text-[16px] font-semibold"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <a className="text-[16px] font-semibold">Installation</a>
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
