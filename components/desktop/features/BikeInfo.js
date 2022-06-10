import { Box, Heading, Text } from '@chakra-ui/react';

const BikeInfo = () => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      backgroundImage="url('/bike_icon.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      h="100%"
      borderRadius="lg"
      pt={8}
      px={4}
      mx={3}
    >
      <Heading as="h2" size="lg">
        Bike Info
      </Heading>
      <Box mt={28} textAlign="right">
        <Text>Your Total Riding Time:</Text>
        <Box>
          <Heading size="lg" display="inline-block">
            122.9
          </Heading>
          <Text display="inline-block" ml={2}>
            hr
          </Text>
        </Box>
        <Text>Your Last Riding Time:</Text>
        <Box>
          <Heading size="lg" display="inline-block">
            3.4
          </Heading>
          <Text display="inline-block" ml={2}>
            hr
          </Text>
        </Box>
        <Text>Average Daily Riding Time:</Text>
        <Box>
          <Heading size="lg" display="inline-block">
            4.1
          </Heading>
          <Text display="inline-block" ml={2}>
            hr
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BikeInfo;
