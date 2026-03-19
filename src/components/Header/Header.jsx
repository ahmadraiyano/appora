import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Header = () => {
  const navItems = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/apps'>Apps</NavLink>
      </li>
      <li>
        <NavLink to='/installation'>Installation</NavLink>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100">
      <div className="navbar w-11/12 lg:w-10/12 mx-auto">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >{navItems}</ul>
        </div>
        <a href="/" className="text-2xl logo cursor-pointer">
          Appora
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='https://github.com/ahmadraiyano' target="_blank" className="btn bg-linear-to-tl from-[#9F62F2] to-[#632EE3] rounded-lg text-white"><FaGithub className="text-2xl"/>Contribute</Link>
      </div>
      </div>
    </nav>
  );
};

export default Header;
