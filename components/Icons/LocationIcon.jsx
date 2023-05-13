import { useMantineTheme } from '@mantine/core';

export default function LocationIcon() {
  const theme = useMantineTheme();
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.7141 13.8807C13.9335 14.6612 12.3013 16.2935 11.1782 17.4166C10.5273 18.0675 9.47307 18.0678 8.8222 17.4169C7.71863 16.3134 6.118 14.7127 5.28596 13.8807C2.68247 11.2772 2.68247 7.05612 5.28596 4.45262C7.88946 1.84913 12.1106 1.84913 14.7141 4.45262C17.3175 7.05612 17.3175 11.2772 14.7141 13.8807Z"
        stroke={theme.colors.gray[3]}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 9.16667C12.5 10.5474 11.3807 11.6667 10 11.6667C8.6193 11.6667 7.50001 10.5474 7.50001 9.16667C7.50001 7.78595 8.6193 6.66667 10 6.66667C11.3807 6.66667 12.5 7.78595 12.5 9.16667Z"
        stroke={theme.colors.gray[3]}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
