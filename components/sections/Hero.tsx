import Image from 'next/image';
import { Box, Flex } from '@chakra-ui/react';
import Carousel, { CarouselItem } from '../ui/Carousel';

import Iconoclast from '../../public/images/site/Iconoclast.jpg';
import Shapes from '../../public/images/site/Shapes.jpg';
import Piano from '../../public/images/site/pianoiv.jpg';

const Hero = () => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'center', xl: 'center' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={12}
    >
      <Box
        w={{ base: '80%', md: '50%' }}
        p={{ base: 8, md: 0 }}
        mb={{ base: 12, md: 0 }}
        mt={{ base: 16, md: 0 }}
        boxShadow="lg"
      >
        <Carousel>
          <CarouselItem>
            <Image src={Iconoclast} width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={Shapes} width={500} height={500} />
          </CarouselItem>
          <CarouselItem>
            <Image src={Piano} width={500} height={500} />
          </CarouselItem>
        </Carousel>
      </Box>
    </Flex>
  );
};

export default Hero;

/* FOR REFERENCE PURPOSES ONLY */

/* <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="10rem"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="6rem"
          fontWeight="normal"
          color="primary.800"
          opacity="0.8"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            // variantColor="primary"
            borderRadius=".8rem"
            py="4"
            px="4"
            lineHeight="1"
            size="5rem"
            // rightIcon="chevron-right"
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="2rem"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack> */
