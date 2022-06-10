import { Box, Heading, Text } from '@chakra-ui/react';

const Maintenance = () => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      backgroundImage="url('/maintenance_icon.png')"
      backgroundRepeat="no-repeat"
      backgroundPosition="right bottom"
      h="100%"
      borderRadius="lg"
      pt={8}
      px={4}
      mx={3}
    >
      <Heading as="h2" size="lg">
        Maintenance
      </Heading>
      <Box mt={20}>
        <Text textAlign="left">
          <strong>Last Time Service</strong>
        </Text>
        <Box mt="3" display="flex" flexDirection="column" alignItems="end">
          <Box textAlign="left">
            <Text>
              💰 &nbsp; cost <strong>0.0</strong> USD
            </Text>
            <Text>
              🔧 &nbsp; replace the <strong>HMI</strong>
            </Text>
            <Text>
              📅 &nbsp; on <strong>2021/12/21</strong>
            </Text>
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" mt={6} fontSize="sm">
          <Box flex="1" textAlign="left">
            <Text>on 2021/08/07</Text>
            <Text>
              fixed the <strong>Torque</strong>
            </Text>
            <Text>cost 100 USD</Text>
          </Box>
          <Box flex="1" textAlign="left">
            <Text>on 2021/08/07</Text>
            <Text>
              fixed the <strong>Motor</strong>
            </Text>
            <Text>cost 0 USD</Text>
          </Box>
        </Box>

        <Text mt={6} textAlign="center">
          More
        </Text>
      </Box>
    </Box>
  );
};

export default Maintenance;
