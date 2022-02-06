import React, { useState } from 'react';

import StyledHeader from './header.styles';

import Logo from '../../../assets/images/icon.jpg';

import Button from '../../atoms/button/button';

import Navigation from '../../molecules/navigation/navigation';

const Header = ({ navigation }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!isOpen);
  };

  return (
    <StyledHeader className={isOpen ? `header--open` : `header--closed`}>
      <img src={Logo} alt="Celtic Elements Logo" />
      <div className="header__navigation">
        {navigation.length > 0 &&
          navigation.map(({ items, title }) => (
            <Navigation items={items} key={`header-menu-${title}`} />
          ))}
      </div>
      <div className="header__buttonWrap">
        <Button onClick={toggleMenu}>{isOpen ? `Hide` : `Show`} menu</Button>
      </div>
    </StyledHeader>
  );
};

export default Header;
