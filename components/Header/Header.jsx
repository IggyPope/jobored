import { createStyles, rem } from '@mantine/core';

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.white,
    height: rem(84),
    width: '100%',
    border: 0,
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return <header className={classes.header}></header>;
}
