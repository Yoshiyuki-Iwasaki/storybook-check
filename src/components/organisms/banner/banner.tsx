import React, { useState } from 'react';

import StyledBanner from './banner.styles';

import Button from '../../atoms/button/button';

const Banner = ({ props }) => {
  return (
    <StyledBanner>
      <div className="banner__inner">
        {props.title && <h2 className="banner__title">{props.title}</h2>}
        {props.text && <p className="banner__text">{props.text}</p>}
        {props.button[0] && (
          <Button href={props.button[0].url}>{props.button[0].text}</Button>
        )}
      </div>
    </StyledBanner>
  );
};

export default Banner;
