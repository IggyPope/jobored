import { rem, em } from '@mantine/core';
import globalStyles from './globalStyles';

const themeOverrides = {
  colorScheme: 'light',
  white: '#FFFFFF',
  black: '#232134',
  colors: {
    gray: [
      '#F7F7F8',
      '#EAEBED',
      '#D5D6DC',
      '#ACADB9',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
      '#7B7C88',
    ],
    blue: [
      '#DEECFF',
      '#C9E0FF',
      '#B7D6FF',
      '#92C1FF',
      '#5E96FC',
      '#3B7CD3',
      '#3B7CD3',
      '#3B7CD3',
      '#3B7CD3',
      '#3B7CD3',
    ],
  },
  primaryShade: {
    light: 4,
    dark: 6,
  },
  defaultRadius: 'md',
  lineHeight: 1.4,
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    lg: rem(24),
    xl: rem(28),
  },

  radius: {
    xs: rem(4),
    sm: rem(6),
    md: rem(8),
    lg: rem(12),
    xl: rem(16),
  },

  spacing: {
    xs: rem(12),
    sm: rem(16),
    md: rem(20),
    lg: rem(22),
    xl: rem(24),
  },

  breakpoints: {
    xs: em(576),
    sm: em(768),
    md: em(992),
    lg: em(1200),
    xl: em(1408),
  },

  other: {},
  headings: {
    fontWeight: 700,
    sizes: {
      h1: { fontSize: rem(28), lineHeight: 1.215, fontWeight: 700 },
      h2: { fontSize: rem(24), lineHeight: 1.2, fontWeight: 700 },
      h3: { fontSize: rem(20), lineHeight: 1.2, fontWeight: 600 },
      h4: { fontSize: rem(16), lineHeight: 1.2, fontWeight: 700 },
      h5: { fontSize: rem(14), lineHeight: 1.2, fontWeight: 600 },
      h6: { fontSize: rem(12), lineHeight: 1.2, fontWeight: 600 },
    },
  },
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: 371,
          sm: 720,
          md: 817,
          lg: 1160,
          xl: 1320,
        },
      },
    },
  },
  activeStyles: { transform: 'translateY(0.0625rem)' },
  datesLocale: 'ru',

  globalStyles: globalStyles,
};

export default themeOverrides;
