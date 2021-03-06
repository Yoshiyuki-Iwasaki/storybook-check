import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';

import Header from './header';

import knobData from './header.knobs.json';
const { navigation } = knobData;

export const standardHeader = () => <Header navigation={navigation.default} />;

export default {
  component: Header,
  decorators: [withKnobs],
  title: 'Organisms/Header',
};
