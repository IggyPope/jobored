import { Button, Flex, useMantineTheme } from '@mantine/core';

export default function SmallShevronDownIcon(props) {
  const theme = useMantineTheme();
  return (
    <Button
      variant="white"
      h="100%"
      w="100%"
      p={0}
      radius={0}
      onClick={props.onClick}
      styles={{
        root: {
          border: 'none',
          backgroundColor: 'transparent',
          color: theme.colors.gray[3],
          '&:hover': {
            color: theme.colors.blue[3],
          },
          '&:active': {
            color: theme.colors.blue[4],
          },
        },
        label: {
          alignItems: 'flex-start',
        },
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.49994 4.5L5.60946 7.16531C5.83416 7.3579 6.16572 7.3579 6.39041 7.16531L9.49994 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  );
}
