import { Flex, Text } from '@chakra-ui/layout';
import BarChar from './BarChar';
import React from 'react';

const Analytic = () => {
  return (
    <Flex mt="30px" direction="column">
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Flex direction="column">
          <Text fontSize="lg" color="gray.500">
            Balance
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            $1500
          </Text>
        </Flex>
        <Text fontSize="lg" color="gray.500">
          PAST 30 DAYS
        </Text>
      </Flex>
      <BarChar />
    </Flex>
  );
};

export default Analytic;
