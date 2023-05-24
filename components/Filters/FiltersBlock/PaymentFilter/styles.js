import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  rightSection: {
    width: '30px',
    '&>div>:first-of-type': {
      transform: 'rotate(180deg)',
    },
  },
  wrapper: {
    '&:hover>input': {
      border: `1px solid ${theme.colors.blue[4]}`,
    },
  },
  input: {
    border: `1px solid ${theme.colors.gray[2]}`,
    fontSize: theme.fontSizes.xs,
    '&::placeholder': {
      color: theme.colors.gray[3],
    },
  },
}));

export default useStyles;
