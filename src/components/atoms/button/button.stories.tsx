import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from './button';

import knobData from './button.knobs.json';
const { icon } = knobData;

const buttonClicked = (e) => {
  e.preventDefault();
  alert('Hello');
};

export const basicButton = () => (
  <Button
    icon={select(icon.label, icon.options, icon.default, icon.group)}
    variant="secondary"
  >
    {text('Button text', 'Basic button', 'images')}
  </Button>
);
export const functionButton = () => (
  <Button
    icon={select(icon.label, icon.options, icon.default, icon.group)}
    onClick={buttonClicked}
  >
    {text('Button text', 'Function button', 'images')}
  </Button>
);

export const linkedButton = () => (
  <Button
    icon={select(icon.label, icon.options, icon.default, icon.group)}
    href={'/router'}
  >
    {text('Button text', 'Linked button', 'images')}
  </Button>
);

export default {
  component: Button,
  decorators: [withKnobs],
  title: 'atoms/Button',
};
