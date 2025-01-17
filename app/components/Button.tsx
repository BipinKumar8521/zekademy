import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className=" block text-semibold border-[2px] border-buttonBorder rounded-[8px] h-[48px] w-[100%] md:w-[320px]"
    >
      {children}
    </button>
  );
};

export default Button;
