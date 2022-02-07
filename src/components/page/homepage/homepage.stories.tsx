import React from 'react';
import { withKnobs, object } from '@storybook/addon-knobs';

import PostTemplate from './homepage';

import knobData from './homepage.knobs.json';
const { banner, footer, header, related }: any = knobData;

export const Homepage = () => (
  <PostTemplate
    banner={object(banner.label, banner.default, banner.group)}
    footer={object(footer.label, footer.default, footer.group)}
    header={object(header.label, header.default, header.group)}
  />
);

export default {
  component: Homepage,
  decorators: [withKnobs],
  title: 'Page/Homepage',
};
