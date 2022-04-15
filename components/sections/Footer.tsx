import React, { ReactNode } from 'react';
import Link from 'next/link';
import {
  chakra,
  Container,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import {
  FaApple,
  FaSpotify,
  FaGooglePlay,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaSoundcloud,
} from 'react-icons/fa';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Container
      as={Stack}
      maxW="6xl"
      py={4}
      direction={{ base: 'column', md: 'column' }}
      spacing={4}
      justify={{ base: 'center', md: 'space-between' }}
      align={{ base: 'center', md: 'center' }}
    >
      <Stack direction="row" spacing={10} mb={2}>

         {/* APPLE MUSIC */}
        <SocialButton
          label="Apple"
          href={
            'https://music.apple.com/us/artist/motion-picture-soundtrack/163261601'
          }
        >
          <Link
            href={
              'https://music.apple.com/us/artist/motion-picture-soundtrack/163261601'
            }
          >
            <a target="_blank">
              <FaApple size="3rem" />
            </a>
          </Link>
        </SocialButton>

        {/* SPOTIFY */}
        <SocialButton
          label="Spotify"
          href={
            'https://open.spotify.com/artist/0hK5VUQ7uhgezxt2YCqiB0?si=fxMGL1apTI-1TM1XSztQow'
          }
        >
          <Link
            href={
              'https://open.spotify.com/artist/0hK5VUQ7uhgezxt2YCqiB0?si=fxMGL1apTI-1TM1XSztQow'
            }
          >
            <a target="_blank">
              <FaSpotify size="2.5rem" />
            </a>
          </Link>
        </SocialButton>

         {/* YOUTUBE */}
        <SocialButton
          label="YouTube"
          href={
            'https://music.youtube.com/channel/UCTy5qUNP5bk-NckveoZts9A?feature=share'
          }
        >
          <Link
            href={
              'https://music.youtube.com/channel/UCTy5qUNP5bk-NckveoZts9A?feature=share'
            }
          >
            <a target="_blank">
              <FaYoutube size="3rem" />
            </a>
          </Link>
        </SocialButton>

         {/* SOUNDCLOUD */}
        <SocialButton
          label="SoundCloud"
          href={'https://soundcloud.com/motionpicturesoundtrack'}
        >
           <Link
            href={
              'https://soundcloud.com/motionpicturesoundtrac
            }
          >
            <a target="_blank">
            <FaSoundcloud size="3rem" />
            </a>
          </Link>
        </SocialButton>

         {/* FACEBOOK */}
        <SocialButton
          label="Facebook"
          href={'https://www.facebook.com/motionpicturesoundtrack'}
        >
          <Link
            href={
              'https://www.facebook.com/motionpicturesoundtrack'
            }
          >
            <a target="_blank">
            <FaFacebook size="3rem" />
            </a>
          </Link> 
        </SocialButton>

         {/* INSTAGRAM */}
        <SocialButton
          label="Instagram"
          href={'https://www.instagram.com/motionpix/?hl=en'}
        >
            <Link
            href={
              'https://www.instagram.com/motionpix/?hl=en'
            }
          >
            <a target="_blank">
            <FaInstagram size="3rem" />
            </a>
          </Link>
        </SocialButton>

         {/* TWITTER */}
        <SocialButton
          label={'Twitter'}
          href={'https://twitter.com/mpsofficial'}
        >
           <Link
            href={
              'https://twitter.com/mpsofficial'
            }
          >
            <a target="_blank">
            <FaTwitter size="3rem" />
            </a>
          </Link>
        </SocialButton>
      </Stack>

      <Flex>
        <Text
          color="brand.700"
          fontSize="1rem"
          fontWeight="semibold"
          textTransform="capitalize"
        >
          Copyright © 2022 Motion Picture Soundtrack - All rights reserved.
        </Text>
      </Flex>
    </Container>
  );
};

export default Footer;
