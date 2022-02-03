import React from "react";

import { StyledButton, StyledLinkedButton } from "./button.styles";

import IconPlus from "../../../assets/images/icons/plus.svg";

// const IconPlus = require("../../../assets/images/icons/plus.svg");
// const IconBag = require("../../../assets/images/icons/shopping-bag.svg");
// const IconCart = require("../../../assets/images/icons/shopping-cart.svg");
// const IconUser = require("../../../assets/images/icons/user.svg");
// const IconX = require("../../../assets/images/icons/x.svg");

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
      {/* <img src={IconPlus} /> */}
      <IconPlus />
      {children}
    </StyledLinkedButton>
  );
};

export default Button;
