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
  },
});

export default globalStyles;
