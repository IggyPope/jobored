import Link from 'next/link';
import { Flex, createStyles, rem } from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles(theme => ({
  navlink: {
    fontSize: theme.fontSizes.sm,
    lineHeight: rem(20),
  },

  activeLink: {
    color: theme.colors.blue[4],
    fontWeight: 500,
  },
}));

export default function NavBar() {
  const { classes, cx } = useStyles();

  const router = useRouter();
  const segment = router.pathname.split('/')[1];

  return (
    <Flex justify={'space-between'} gap={rem(60)}>
      <Link
        href="/vacancies"
        className={cx(classes.navlink, {
          [classes.activeLink]: segment === 'vacancies',
        })}
      >
        Поиск Вакансий
      </Link>
      <Link
        href="/favorites"
        className={cx(classes.navlink, {
          [classes.activeLink]: segment === 'favorites',
        })}
      >
        Избранное
      </Link>
    </Flex>
  );
}
