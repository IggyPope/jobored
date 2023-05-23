import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.white,
    height: rem(84),
    width: '100%',
    border: 0,
  },

  placeholder: {
    width: rem(141),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  navbar: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  navLink: {
    fontSize: theme.fontSizes.sm,
    lineHeight: rem(20),
  },

  activeLink: {
    color: theme.colors.blue[4],
    fontWeight: 500,
  },

  drawerLink: {
    fontSize: theme.fontSizes.md,
    padding: rem(10),
  },

  activeDrawerLink: {
    color: theme.colors.blue[5],
    backgroundColor: theme.colors.blue[0],
    fontWeight: 500,
  },

  burger: {
    display: 'none',

    [theme.fn.smallerThan('xs')]: {
      display: 'block',
    },
  },
}));

export default useStyles;
