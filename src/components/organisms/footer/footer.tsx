import React from 'react';
import { StyledFooter } from './footer.styles';
import Navigation from '../../molecules/navigation/navigation';

type FooterType = {
  menus: any;
};

const Footer: React.FC<FooterType> = ({ menus }) => {
  return (
    <StyledFooter>
      <div className="footer__contents">
        <div className="footer__wrapper">
          {menus.map(({ items, title }: any) => (
            <div key={title}>
              {title && <h3 className="footer__title">{title}</h3>}
              <Navigation direction="vertical" items={items} />
            </div>
          ))}
        </div>
        <div className="footer__newsletter">
          <h4 className="footer__heading">Join our newsletter</h4>
          <p>テキストが入ります。テキストが入ります。</p>
        </div>
        <nav className="footer__copyright">
          <p>Copyright &copy; iwasakiii</p>
          <p>{new Date().getFullYear()}</p>
          <a href="iwasakiii"> Website by iwasakiii</a>
        </nav>
      </div>
    </StyledFooter>
  );
};

export default Footer;
