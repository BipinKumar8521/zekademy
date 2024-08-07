import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => {};
}) => {
  return (
    <button
      onClick={onClick}
      className=" block text-semibold border-[2px] border-buttonBorder rounded-[8px] h-[48px] w-[320px]"
    >
      {children}
    </button>
  );
};

export default Button;
