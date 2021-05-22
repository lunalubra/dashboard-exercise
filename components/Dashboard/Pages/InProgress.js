import { Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/layout';
import React from 'react';

const InProgress = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/gradient.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Text fontSize="2xl" fontWeight="semibold" color="white">
        In progress
      </Text>
      <Text fontSize="lg" color="white">
        This page is in progress
      </Text>
    </Flex>
  );
};

export default InProgress;
