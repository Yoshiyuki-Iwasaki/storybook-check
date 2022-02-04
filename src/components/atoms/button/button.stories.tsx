import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './button';

const buttonClicked = (e) => {
  e.preventDefault();
  alert('Hello');
};

export const basicButton = () => (
  <Button variant="secondary">{text('Button text', 'Basic button')}</Button>
);
export const functionButton = () => (
  <Button onClick={buttonClicked}>Function button</Button>
);

export const linkedButton = () => (
  <Button href={'/router'}>Linked button</Button>
);

export default {
  component: Button,
  title: 'Button',
};
