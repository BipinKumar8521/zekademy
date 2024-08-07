import React from "react";
import Logo from "./Logo";

const Navbar = ({ onSignOut }: { onSignOut: () => void }) => {
  return (
    <div className="flex justify-between items-center px-4 md:px-14 border-b-2 border-buttonBorder h-[72px]">
      <Logo />
      <button onClick={onSignOut} className="text-link">
        Sign Out
      </button>
    </div>
  );
};

export default Navbar;
