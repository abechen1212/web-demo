import { Box, Heading, Text } from '@chakra-ui/react';

const Iventory = () => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      backgroundImage="url('/inventory_icon.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      h="100%"
      borderRadius="lg"
      pt={8}
      px={4}
      mx={3}
      position="relative"
    >
      <Heading as="h2" size="lg">
        My Iventory
      </Heading>
      <Box mt={20} textAlign="left">
        <Text mt="2">
          Motor: only <strong style={{ color: '#FF0000' }}>3</strong> pieces
          left
        </Text>
        <Text mt="2">
          Torque: <strong style={{ color: '#0EB700' }}>20</strong>+ pieces
        </Text>
        <Text mt="2">
          HMI: <strong style={{ color: '#0EB700' }}>20</strong>+ pieces
        </Text>
        <Text mt="2">
          Battery: <strong style={{ color: '#FF8700' }}>13</strong> pieces
        </Text>
      </Box>
      <Box textAlign="center" mt={24}>
        <Text> Click to Replenish Inventory</Text>
      </Box>
    </Box>
  );
};

export default Iventory;
