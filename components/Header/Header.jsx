import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Burger,
  Container,
  Drawer,
  Flex,
  Stack,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import routes from '@/constants/routes';
import Logo from '../Logo/Logo';

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.white,
    height: rem(84),
    width: '100%',
    border: 0,
  },

  placeholder: {
    width: rem(141),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  navbar: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  navLink: {
    fontSize: theme.fontSizes.sm,
    lineHeight: rem(20),
  },

  activeLink: {
    color: theme.colors.blue[4],
    fontWeight: 500,
  },

  drawerLink: {
    fontSize: theme.fontSizes.md,
    padding: rem(10),
  },

  activeDrawerLink: {
    color: theme.colors.blue[5],
    backgroundColor: theme.colors.blue[0],
    fontWeight: 500,
  },

  burger: {
    display: 'none',

    [theme.fn.smallerThan('xs')]: {
      display: 'block',
    },
  },
}));

export default function Header() {
  const { classes, cx } = useStyles();

  const [burgerOpened, { open, close, toggle }] = useDisclosure(false);

  const router = useRouter();
  const segment = router.pathname.split('/')[1];

  return (
    <header className={classes.header}>
      <Container size="lg" px="lg" h="100%">
        <Flex h="100%" justify={'space-between'} align={'center'}>
          <Link href="/">
            <Logo />
          </Link>
          <Flex
            justify={'space-between'}
            gap={rem(60)}
            className={classes.navbar}
          >
            {routes.map(route => {
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
      >
        <Stack spacing="0">
          {routes.map(route => {
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
