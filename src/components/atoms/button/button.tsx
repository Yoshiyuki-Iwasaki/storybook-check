import React, { ReactChild } from "react";

type ButtonType = {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const Button: React.FC<ButtonType> = ({ children, href, onClick }) => {
  if (!href) return <button onClick={onClick}>{children}</button>;
  return <a href={href}>{children}</a>;
};

export default Button;
