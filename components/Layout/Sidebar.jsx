import React from 'react';
import { Flex } from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Flex
      position="fixed"
      left="0"
      h="95vh"
      w="200px"
      flexDir="column"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      justifyContent="space-between"
      background="green"
    >
      Sidebar
    </Flex>
  );
}
