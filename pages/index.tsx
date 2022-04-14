import { ReactElement } from 'react';
import { Heading } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Hero from '../components/sections/Hero';
import Layout from '../components/layouts/Layout';
import Iconoclast from '../public/images/site/Iconoclast.jpg';
import Shapes from '../public/images/site/Shapes.jpg';
import Piano from '../public/images/site/pianoiv.jpg';

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}

// ** FOR REFERENCE PURPOSES ONLY **
// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };
