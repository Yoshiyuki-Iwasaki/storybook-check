import React from "react";

import { StyledButton, StyledLinkedButton } from "./button.styles";

type ButtonType = {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
};

const Button: React.FC<ButtonType> = ({ children, href, onClick }) => {
  if (!href) return <StyledButton onClick={onClick}>{children}</StyledButton>;
  return <StyledLinkedButton href={href}>{children}</StyledLinkedButton>;
};

export default Button;
