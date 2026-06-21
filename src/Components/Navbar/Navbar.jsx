import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF]  shadow-sm">
      <div className="navbar  max-w-300 mx-auto ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">CS — Ticket System</a>
        </div>

        <div className="navbar-end">
          <a className="btn bg-linear-to-r/srgb from-[#632EE3] to-[#9F62F2]">
            + New Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
