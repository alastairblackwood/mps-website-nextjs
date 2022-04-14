import { Flex } from '@chakra-ui/react';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Iconoclast from '../../../public/img/iconoclast.jpg';

const Layout = (props: any) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '120rem' }}
      m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
};

export default Layout;
