import { Box, Heading } from '@chakra-ui/react';

const Desktop = ({ children }) => {
  return (
    <Box px={10} color="#D8D8D8" backgroundColor="#0D172A" minHeight="100vh">
      <Box
        as="nav"
        height="15vh"
        display="flex"
        justifyContent="start"
        alignItems="center"
      >
        <Box>
          <Heading size="2xl">Service Tool Demo</Heading>
        </Box>
      </Box>
      {children}
    </Box>
  );
};

export default Desktop;
