import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import Search from './Search';

const Header = () => {
  return (
    <Flex
      w="100%"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex direction="column">
        <Text fontSize="2xl" fontWeight="bold">
          Dashboard
        </Text>
        <Text fontSize="lg" color="gray.500">
          Payments updates
        </Text>
      </Flex>
      <Search />
    </Flex>
  );
};

export default Header;
