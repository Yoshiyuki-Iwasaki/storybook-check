import StyledBanner from './banner.styles';

import Button from '../../atoms/button/button';

import ParseHTML from '../../particles/parseHTML';

const Banner = ({ content, cta, title }: any) => {
  return (
    <StyledBanner>
      <div className="banner__inner">
        {title && <h2 className="banner__title">{title}</h2>}
        {content && <div className="banner__text">{ParseHTML(content)}</div>}
        {cta && cta.title && cta.title !== '' && (
          <footer className="banner__footer">
            <Button href={cta.url}>{cta.title}</Button>
          </footer>
        )}
      </div>
    </StyledBanner>
  );
};

export default Banner;
