import React, { useState } from 'react';

import StyledRelated from './related.styles';

import Intro from '../../molecules/intro/intro';

import ParseHTML from '../../particles/parseHTML';

const Related = ({ intro, items, variant }: any) => {
  if (!items) return null;
  if (!items.length) return null;
  return (
    <StyledRelated className="related" variant={variant}>
      <div className="related__content">
        <Intro {...intro} />
        <div className="related__items">
          {items.map((item) => (
            <RelatedItem {...item} variant={variant} />
          ))}
        </div>
      </div>
    </StyledRelated>
  );
};

const RelatedItem = ({
  category,
  description,
  image,
  slug,
  title,
  variant,
}) => (
  <div className="related-item">
    {image && slug && (
      <a href={`/${slug}`}>
        <div className="related-item__image">
          <img src={image} alt={title} />
        </div>
      </a>
    )}
    {category && category.href && category.label && (
      <h4 className="related-item__subtitle">
        <a href={category.href}>{category.label}</a>
      </h4>
    )}
    <h3 className="related-item__title">
      <a href={`/${slug}`}>{title}</a>
    </h3>
    <div className="related-item__description">{ParseHTML(description)}</div>
    <a className="related-item__link" href="#">
      View article
    </a>
  </div>
);

export default Related;
