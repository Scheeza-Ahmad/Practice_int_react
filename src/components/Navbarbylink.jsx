import React from "react";
import { Link, Outlet } from "react-router-dom";
// Outlet aik placeholder hota hai jo ka website ka current route ka content show karta hai
const Navbarbylink = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbarbylink;
