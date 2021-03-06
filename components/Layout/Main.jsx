import Head from 'next/head';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';

import React from 'react';

export default function Layout({ children, router }) {
  const isDemoMode = router.asPath.slice(1, 5) === 'demo';
  // console.log(test);
  return (
    <Box pb={6}>
      <Head>
        <title>Farmland .inc</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!isDemoMode && <Navbar />}
      <Box>{children}</Box>
    </Box>
  );
}
