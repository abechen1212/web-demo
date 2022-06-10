import { Box, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';

const Diagnosis = ({ mode }) => {
  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      h="85%"
      borderRadius="lg"
      px={3}
      mx={3}
      mt={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <NextLink href={mode === 'demo' ? '/demo/desktop/diagnosis' : '#'}>
        <a>
          <Text>Click to check your bike status</Text>
        </a>
      </NextLink>
      <Box mt={4}>
        <NextImage
          src="/diagnosis_icon.png"
          width="77"
          height="77"
          alt="diagnosis_icon"
        />
      </Box>
    </Box>
  );
};

export default Diagnosis;
