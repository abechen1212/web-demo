import { Box, Heading } from '@chakra-ui/react';

const Mileage = () => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      backgroundImage="url('/distance_icon.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      h="100%"
      borderRadius="lg"
      pt={8}
      px={4}
      mx={3}
    >
      <Heading as="h2" size="lg">
        Total Distance
      </Heading>
      <Box mt={28} textAlign="center">
        <Heading as="h1" display="inline-block" fontSize="70px">
          879
        </Heading>
        <Box display="inline-block" ml={2}>
          km
        </Box>
      </Box>
    </Box>
  );
};

export default Mileage;
