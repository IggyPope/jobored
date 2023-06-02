import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  input: {
    border: `1px solid ${theme.colors.gray[2]}`,
    cursor: 'pointer',
    fontSize: theme.fontSizes.xs,
    fontWeight: 400,
    caretColor: theme.colors.blue[4],
    '&:hover': {
      border: `1px solid ${theme.colors.blue[4]}`,
    },
    '&::placeholder': {
      color: theme.colors.gray[3],
    },
  },
  item: {
    fontSize: theme.fontSizes.xs,
    fontWeight: 400,
    padding: '8px 12px',
    whiteSpace: 'normal',
    '&:hover': {
      backgroundColor: theme.colors.blue[0],
    },
  },
  itemsWrapper: {
    width: '100%',
  },
  dropdown: {
    width: '1px',
  },
}));

export default useStyles;
