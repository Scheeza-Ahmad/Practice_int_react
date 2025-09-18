import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbarusingnavlink = () => {
  return (
    <>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nonactive")}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nonactive")}
          to="contact"
        >
          Contact
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nonactive")}
          to="about"
        >
          About
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default Navbarusingnavlink;
