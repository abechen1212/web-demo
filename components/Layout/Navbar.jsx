import NextLink from 'next/link';
import NextImage from 'next/image';
import { Box } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box
      position="sticky"
      top="0"
      w="100%"
      h="70px"
      background="gray.300"
      zIndex={1}
    >
      <Box height="100%">
        {/* <NextLink href="/">
          <a>
            <NextImage
              src="/farmland_logo.png"
              width="150"
              height="50"
              alt="logo"
              // layout="fill"
            />
          </a>
        </NextLink> */}
        Farmland Inc.
      </Box>
    </Box>
  );
}
