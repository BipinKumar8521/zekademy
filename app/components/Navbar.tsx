import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-14 border-b-2 border-buttonBorder h-[72px]">
      <Logo />
      <button className="text-link">Sign Out</button>
    </div>
  );
};

export default Navbar;
