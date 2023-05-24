import Link from 'next/link';
import { useRouter } from 'next/router';

import { Burger, Container, Drawer, Flex, Stack, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import routes from '@/constants/routes';
import Logo from '@/components/Icons/Logo';
import useStyles from './styles';

export default function Header() {
  const { classes, cx } = useStyles();

  const [burgerOpened, { close, toggle }] = useDisclosure(false);

  const router = useRouter();
  const segment = router.pathname.split('/')[1];

  return (
    <header className={classes.header}>
      <Container size="lg" px="lg" h="100%">
        <Flex h="100%" justify="space-between" align="center">
          <Logo />
          <Flex
            justify="space-between"
            gap={rem(60)}
            className={classes.navbar}
          >
            {routes.map((route) => {
              return (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cx(classes.navLink, {
                    [classes.activeLink]: segment === route.path.split('/')[1],
                  })}
                >
                  {route.name}
                </Link>
              );
            })}
          </Flex>
          <div className={classes.placeholder}></div>
          <Burger
            opened={burgerOpened}
            onClick={toggle}
            className={classes.burger}
          />
        </Flex>
      </Container>
      <Drawer
        opened={burgerOpened}
        onClose={close}
        padding="md"
        size="90%"
        position="right"
        closeButtonProps={{
          size: 'lg',
          mr: 'xxs',
          mt: '6px',
        }}
      >
        <Stack spacing={4}>
          {routes.map((route) => {
            return (
              <Link
                key={'drawer_' + route.path}
                href={route.path}
                className={cx(classes.drawerLink, {
                  [classes.activeDrawerLink]:
                    segment === route.path.split('/')[1],
                })}
                onClick={close}
              >
                {route.name}
              </Link>
            );
          })}
        </Stack>
      </Drawer>
    </header>
  );
}
