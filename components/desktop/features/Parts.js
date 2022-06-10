import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Parts = () => {
  const parts = [
    {
      name: 'battery',
      DMID: 'FLBCO01220601',
      DSN: 'FLBCO01220601',
      fw_version: 'A02',
      manufacture_date: '20220615',
      icon: '/battery_icon.png',
    },
    {
      name: 'moter',
      DMID: 'FLBCO01220602',
      DSN: 'FLBCO01220602',
      fw_version: 'A02',
      manufacture_date: '20220615',
      icon: '/gear_machine_icon.png',
    },
    {
      name: 'torque',
      DMID: '',
      DSN: 'FLBCO01220603',
      fw_version: 'A02',
      manufacture_date: '20220615',
      icon: '/electronic_machine_icon.png',
    },
    {
      name: 'HMI',
      DMID: 'FLBCO01220604',
      DSN: 'FLBCO01220604',
      fw_version: 'A02',
      manufacture_date: '20220615',
      icon: '/ipad_icon.png',
    },
    {
      name: 'controller',
      DMID: 'FLBCO01220605',
      DSN: 'FLBCO01220605',
      fw_version: 'A02',
      manufacture_date: '20220615',
      icon: '/robotics_icon.png',
    },
  ];

  return (
    <Box
      border="1px"
      borderColor="#030407"
      backgroundColor="#15223D"
      h="85%"
      borderRadius="lg"
      py={2}
      px={3}
      mx={3}
      mt={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        <ChevronLeftIcon w={50} h={50} />
        {parts.map((part) => (
          <Box
            border="1px"
            borderRadius="md"
            borderColor="#030407"
            backgroundColor="#1F2D4B"
            h="190px"
            w="140px"
            fontSize="12px"
            px={2}
            pt={4}
            key={part.name}
            backgroundImage={`url('${part.icon}')`}
            backgroundRepeat="no-repeat"
            backgroundPosition="right 5% bottom 5%"
          >
            <Text>
              <strong style={{ textTransform: 'capitalize' }}>
                {part.name}
              </strong>
            </Text>
            <List>
              <ListItem>DMID: {part.DMID !== '' ? part.DMID : 'None'}</ListItem>
              <ListItem>DSN: {part.DSN}</ListItem>
              <ListItem>FW version: {part.fw_version}</ListItem>
              <ListItem>Manufacture Date: {part.manufacture_date}</ListItem>
            </List>
          </Box>
        ))}
        <ChevronRightIcon w={50} h={50} />
      </Box>
    </Box>
  );
};

export default Parts;
