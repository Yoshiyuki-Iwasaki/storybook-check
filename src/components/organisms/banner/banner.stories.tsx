import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';

import Banner from './banner';

import knobData from './banner.knobs.json';
const { banner }: any = knobData;

export const standardBanner = () => <Banner props={banner} />;

export default {
  component: Banner,
  decorators: [withKnobs],
  title: 'Organisms/Banner',
};
