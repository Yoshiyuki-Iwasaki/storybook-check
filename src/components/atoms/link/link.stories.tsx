import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import knobData from './link.knobs.json';
const { innerText } = knobData;

export const basicLink = () => (
  <a>{text(innerText.label, innerText.default, innerText.group)}</a>
);

export default {
  decorators: [withKnobs],
  title: 'atoms/Link',
};
