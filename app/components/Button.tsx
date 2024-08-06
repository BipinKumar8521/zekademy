import React from "react";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-buttonBackground block text-semibold border-[2px] border-buttonBorder rounded-[8px] h-[48px] w-[320px]">
      {children}
    </button>
  );
};

export default Button;
