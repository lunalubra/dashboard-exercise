import { BiHomeAlt, BiCar } from 'react-icons/bi';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import RecentCard from './RecentCard';

const data = [
  {
    icon: BiHomeAlt,
    title: 'Home Rend',
    status: 'Pending',
    amount: '1500'
  },
  {
    icon: BiCar,
    title: 'Car Insurance',
    status: 'Pending',
    amount: '150'
  }
];

const UpcomingPayments = () => {
  return (
    <Flex mt="30px" direction="column">
      <Text fontSize="xl" fontWeight="bold">
        Upcoming Payments
      </Text>
      <Text color="gray.400">13 Mar 2021</Text>
      {data.map((props, key) => (
        <RecentCard key={key} {...props} />
      ))}
    </Flex>
  );
};

export default UpcomingPayments;
