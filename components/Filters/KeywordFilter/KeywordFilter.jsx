import SearchIcon from '@/components/Icons/SearchIcon';
import { Button, TextInput } from '@mantine/core';

export default function KeyWordFilter({ value, onChange, onSubmit, disabled }) {
  return (
    <TextInput
      value={value}
      onChange={onChange}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
      disabled={disabled}
      w="100%"
      placeholder="Введите название вакансии"
      icon={<SearchIcon />}
      rightSection={
        <Button
          onClick={onSubmit}
          disabled={disabled}
          fz="xs"
          fw={500}
          size="md"
          compact
          px="md"
          styles={(theme) => ({
            root: {
              border: 0,
              height: '32px',
              '&:hover': {
                backgroundColor: theme.colors.blue[3],
              },
              '&:active': {
                backgroundColor: theme.colors.blue[5],
              },
            },
          })}
        >
          Поиск
        </Button>
      }
      rightSectionWidth={95}
      styles={(theme) => ({
        input: {
          fontSize: '14px',
          height: '48px',
          padding: '8px 12px',
          border: `1px solid ${theme.colors.gray[1]}`,
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
          '&:hover>input': {
            border: `1px solid ${theme.colors.blue[4]}`,
          },
        },
      })}
    />
  );
}
