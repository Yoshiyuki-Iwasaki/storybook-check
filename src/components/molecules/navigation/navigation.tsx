import React from 'react';

import { StyledNavigation } from './navigation.styles';

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
      {items.map((item: any) => (
        <a href={item.url}>{item.title}</a>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;
