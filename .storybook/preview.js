import GlobalStyle from '../src/components/particles/globalStyles';
import { ThemeProvider } from 'styled-components';
import themeDefault from '../src/components/particles/themeDefault';
import '../src/index.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
/*
 * Global decorator to apply the styles to all stories
 * Read more about them at:
 * https://storybook.js.org/docs/react/writing-stories/decorators#global-decorators
 */
export const decorators = [
  (Story) => (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
