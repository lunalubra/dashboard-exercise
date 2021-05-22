import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import HistoryTable from './HistoryTable';

const History = () => {
  return (
    <Flex direction="column">
      <Text fontSize="2xl" fontWeight="bold">
        History
      </Text>
      <Text fontSize="lg" color="gray.500">
        Transactions of last 6 month
      </Text>
      <Flex w="100%" h="75px" overflowY="scroll">
        <HistoryTable />
      </Flex>
    </Flex>
  );
};

export default History;
