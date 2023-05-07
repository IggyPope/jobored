import Link from 'next/link';
import { Container, Flex, createStyles, rem } from '@mantine/core';
import Image from 'next/image';
import NavBar from '../NavBar/NavBar';

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.white,
    height: rem(84),
    width: '100%',
    border: 0,
  },
  placeholder: {
    width: rem(141),
  },
}));

export default function Header() {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <Container size={1160} px={22} h="100%">
        <Flex h="100%" justify={'space-between'} align={'center'}>
          <Link href="/">
            <Image src={'./logo.svg'} alt="site logo" width={141} height={36} />
          </Link>
          <NavBar />
          <div className={classes.placeholder}></div>
        </Flex>
      </Container>
    </header>
  );
}
