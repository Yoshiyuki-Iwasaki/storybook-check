import React from 'react';
import { withKnobs, array, text, select } from '@storybook/addon-knobs';

import Footer from './footer';

import knobData from './footer.knobs.json';
const { menus } = knobData;

export const standardFooter = () => <Footer menus={menus.default} />;
console.log([menus.label, menus.default, menus.group]);

export default {
  decorators: [withKnobs],
  title: 'Organisms/Footer',
};
