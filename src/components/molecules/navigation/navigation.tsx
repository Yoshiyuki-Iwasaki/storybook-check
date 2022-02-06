import React from 'react';
import { StyledNavigation } from './navigation.styles';

import IconPlus from '../../../assets/images/icons/plus.svg';
import IconBag from '../../../assets/images/icons/shopping-bag.svg';
import IconCart from '../../../assets/images/icons/shopping-cart.svg';
import IconUser from '../../../assets/images/icons/user.svg';
import IconX from '../../../assets/images/icons/x.svg';

type ItemType = {
  url: any;
  default: any;
  title: any;
};

type NavigationType = {
  direction?: any;
  items?: any;
};

const Icons = {
  bag: IconBag,
  cart: IconCart,
  plus: IconPlus,
  user: IconUser,
  x: IconX,
};

const NavigationIcon = ({ name, title }) => {
  if (Icons[name] === undefined) return null;

  const Icon = Icons[name];
  return (
    <figure className="nav__icon">
      <img src={Icon} />
    </figure>
  );
};

const Navigation: React.FC<NavigationType> = ({
  direction = 'horizontal',
  items,
}) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item) => (
        <a className="nav__text" key={item.title} href={item.url}>
          {item.icon ? (
            <NavigationIcon name={item.icon} title={item.title} />
          ) : (
            item.title
          )}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
