import { Box, Button, Heading, Progress, Text } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import DesktopLayout from '../../../components/layout/demo/Desktop.js';

export default function Diagnosis() {
  return (
    <DesktopLayout>
      <Box p={3}>
        <Box display="flex" justifyContent="space-between">
          <Heading display="inline-block">Diagnosis</Heading>
          <NextLink display="inline-block" href="/demo/desktop">
            <Button color="black">Back</Button>
          </NextLink>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h="85vh"
        >
          <Progress width="75%" colorScheme="green" size="md" value={50} />
          <SettingsIcon w={10} h={10} mt={7} />
          <Box width="75%" mt={20}>
            <Text>checking motor . . . . . .Done!</Text>
            <Text>checking torque_Sensor . . . . . .ErrorCode:81!</Text>
            <Text>checking HMI . . . . . .Done!</Text>
            <Text>chenging Battery . . . . . .Done!</Text>
            <Text>all diagnosis finished.</Text>
            <Text> click “Next” to continue.</Text>
          </Box>
          <Box textAlign="right" width="75%" mt={10}>
            <Button color="black">Next</Button>
          </Box>
        </Box>
      </Box>
    </DesktopLayout>
  );
}
