import React from 'react';
import { StyledNavigation } from './navigation.styles';

type ItemType = {
  url: any;
  default: any;
  title: any;
};

type NavigationType = {
  direction: any;
  items?: any;
};

const Navigation: React.FC<NavigationType> = ({
  direction = 'horizontal',
  items,
}) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map((item) => (
        <a key={item.title} href={item.url}>
          {item.title}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
