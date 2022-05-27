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
      background="blue.800"
      zIndex={1}
    >
      <Box>
        <NextLink href="/">
          <a>
            <NextImage
              src="/farmland_logo.png"
              width="200"
              height="70"
              alt="logo"
              // layout="fill"
            />
          </a>
        </NextLink>
      </Box>
    </Box>
  );
}
