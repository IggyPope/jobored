const globalStyles = theme => ({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    maxWidth: '100vw',
    overflowX: 'hidden',
    backgroundColor: theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },

  p: {
    marginBottom: '1rem',
  },

  ul: {
    marginBottom: '1.25rem',
    marginLeft: '1.25rem',
  },
});

export default globalStyles;
