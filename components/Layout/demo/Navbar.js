import { Box, Heading } from '@chakra-ui/react';
import NextImage from 'next/image';

const Navbar = ({ imgUrl }) => {
  return (
    <Box
      as="nav"
      height="15vh"
      display="flex"
      justifyContent="start"
      alignItems="center"
    >
      <NextImage src={imgUrl} width="125px" height="75px" />
      <Box ml={3}>
        <Heading size="2xl">Service Tool Demo</Heading>
      </Box>
    </Box>
  );
};

export default Navbar;
