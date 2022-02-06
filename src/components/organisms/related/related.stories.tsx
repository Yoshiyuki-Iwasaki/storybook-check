import React from 'react';
import { array, object, text } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

import Related from './related';

import knobData from './related.knobs.json';
const { items, intro }: any = knobData;

export const postsRelated = () => (
  <Related
    intro={{
      cta: object(intro.cta.label, intro.cta.default, intro.cta.group),
      subtitle: text(
        intro.subtitle.label,
        intro.subtitle.default,
        intro.subtitle.group
      ),
      text: text(intro.text.label, intro.text.default, intro.text.group),
      title: text(intro.title.label, intro.title.default, intro.title.group),
    }}
    items={array(items.label, items.default, items.group)}
  />
);

export default {
  component: Related,
  decorators: [withDesign],
  title: 'Organisms/Related',
};
