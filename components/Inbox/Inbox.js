import { Flex } from '@chakra-ui/layout';
import React from 'react';

import RecentActivities from './RecentActivities';
import UpcomingPayments from './UpcomingPayments';
import CreditCard from './CreditCard';
import Navbar from './Navbar';
import DeepEffect from '../DeepEffect';

const Inbox = () => {
  return (
    <Flex
      w="25%"
      maxH="100vh"
      py="3%"
      px="20px"
      direction="column"
      bg="gray.200"
    >
      <Navbar />
      <DeepEffect amount={2} color="brand.100">
        <CreditCard />
      </DeepEffect>
      <Flex mx="20px" pl={1} direction="column" overflowY="scroll">
        <RecentActivities />
        <UpcomingPayments />
      </Flex>
    </Flex>
  );
};

export default Inbox;
