import { Box, Heading, Text } from '@chakra-ui/react';

const Warranty = () => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      backgroundImage="url('/certificate_icon.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      h="100%"
      borderRadius="lg"
      pt={8}
      px={4}
      mx={3}
    >
      <Heading as="h2" size="lg">
        Warranty Info
      </Heading>
      <Box mt={20} textAlign="right">
        <Text>
          <strong>Activation Date:</strong>
        </Text>
        <Text>2022/06/15</Text>
        <Text mt={2}>
          <strong>Warranty until:</strong>
        </Text>
        <Text>2024/06/15</Text>
        <Text mt={2}>
          <strong>System Serial Number:</strong>
        </Text>
        <Text>CCMEKB01220501</Text>
        <Text mt={2}>
          <strong>System Model ID:</strong>
        </Text>
        <Text>CCMEKB01220501</Text>
      </Box>
    </Box>
  );
};

export default Warranty;
