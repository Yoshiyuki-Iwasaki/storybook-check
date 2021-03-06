import React from 'react';
import { withKnobs, array, text, select } from '@storybook/addon-knobs';

import Navigation from './navigation';

import knobData from './navigation.knobs.json';
const { direction, items } = knobData;

export const horizontalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      direction.default,
      direction.group
    )}
    items={items.default}
  />
);

export const verticalNavigation = () => (
  <Navigation
    direction={select(
      direction.label,
      direction.options,
      'vertical',
      direction.group
    )}
    items={items.default}
  />
);

export default {
  decorators: [withKnobs],
  title: 'molecules/Navigation',
};
