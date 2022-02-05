import React from 'react';

import {
  StyledButton,
  StyledLinkedButton,
  IconWrap,
  Inner,
  Text,
} from './button.styles';

import IconPlus from '../../../assets/images/icons/plus.svg';
import IconBag from '../../../assets/images/icons/shopping-bag.svg';
import IconCart from '../../../assets/images/icons/shopping-cart.svg';
import IconUser from '../../../assets/images/icons/user.svg';
import IconX from '../../../assets/images/icons/x.svg';

const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const ButtonIcon = ({ name }) => {
  if (Icons[name] === undefined) return null;

  const Icon = Icons[name];
  return <img src={Icon} />;
};

type ButtonType = {
  children: React.ReactNode;
  href?: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  variant?: string;
};

const Button: React.FC<ButtonType> = ({
  children,
  href,
  icon,
  onClick,
  variant = 'primary',
}) => {
  if (!href)
    return (
      <StyledButton onClick={onClick} variant={variant}>
        <Inner>
          <IconWrap>{icon && <ButtonIcon name={icon} />}</IconWrap>
          <Text>{children}</Text>
        </Inner>
      </StyledButton>
    );
  return (
    <StyledLinkedButton href={href} variant={variant}>
      <Inner>
        <IconWrap>{icon && <ButtonIcon name={icon} />}</IconWrap>
        <Text>{children}</Text>
      </Inner>
    </StyledLinkedButton>
  );
};

export default Button;
