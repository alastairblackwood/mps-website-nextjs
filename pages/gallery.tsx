import Image from 'next/image';
import { Flex, Heading, HStack, VStack } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';
import MPSCurtain from '../public/images/site/MPSCURTAIN-low-res.jpg';
import MPSDoor1 from '../public/images/site/MPS.DOOR3-2-low-res.jpg';
import MPSFlag from '../public/images/site/MPS-al-leeds-flag-gtr.jpg';
import MPSLiveCamden from '../public/images/site/MPS-live-camden.jpg';
import MPSEarlyBW from '../public/images/site/MPS-bw-band-early.jpg';

const Gallery = () => {
  return (
    <Layout>
      <Heading>Gallery</Heading>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'center', xl: 'center' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="wrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Flex flexFlow="wrap">
          <Image src={MPSCurtain} height={300} width={300} alt="MPS Curtain" />
          <Image src={MPSDoor1} height={300} width={300} alt="MPS Door" />
          <Image src={MPSFlag} height={300} width={500} alt="MPS Flag" />
          <Image
            src={MPSLiveCamden}
            height={300}
            width={400}
            alt="MPS Live Camden"
          />
          <Image src={MPSEarlyBW} height={300} width={400} alt="MPS Early BW" />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Gallery;
