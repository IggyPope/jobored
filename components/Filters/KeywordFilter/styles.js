import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  input: {
    fontSize: '14px',
    height: '48px',
    padding: '8px 12px',
    border: `1px solid ${theme.colors.gray[1]}`,
    caretColor: theme.colors.blue[4],
    '&::placeholder': {
      color: theme.colors.gray[3],
    },
  },
  icon: {
    color: theme.colors.gray[3],
  },
  rightSection: {
    paddingRight: '12px',
    justifyContent: 'flex-end',
  },
  wrapper: {
    //need this to disable hover on non-touch devices
    '@media (hover: hover) and (pointer: fine)': {
      '&:hover>input': {
        border: `1px solid ${theme.colors.blue[4]}`,
      },
    },
  },
}));

export default useStyles;
