import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme/theme';
import Layout from '../components/layouts/Layout';
import Head from 'next/head';

import '../global.css';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: any;
};

export default function MyApp({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactNode {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
