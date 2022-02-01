import React from "react";

import { StyledButton, StyledLinkedButton } from "./button.styles";

type ButtonType = {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  variant?: string;
};

const Button: React.FC<ButtonType> = ({
  children,
  href,
  onClick,
  variant = "primary",
}) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        {children}
      </StyledButton>
    );
  return (
    <StyledLinkedButton href={href} variant={variant}>
      {children}
    </StyledLinkedButton>
  );
};

export default Button;
