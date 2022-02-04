import React from 'react';

import {
  StyledButton,
  StyledLinkedButton,
  Icon,
  Inner,
  Text,
} from './button.styles';

import IconPlus from '../../../assets/images/icons/plus.svg';
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
  variant = 'primary',
}) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        <Inner>
          <Icon>
            <img src={IconPlus} />
          </Icon>
          <Text>{children}</Text>
        </Inner>
      </StyledButton>
    );
  return (
    <StyledLinkedButton href={href} variant={variant}>
      <Inner>
        <Icon>
          <img src={IconPlus} />
        </Icon>
        <Text>{children}</Text>
      </Inner>
    </StyledLinkedButton>
  );
};

export default Button;
