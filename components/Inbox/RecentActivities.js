import { IoWaterOutline, IoCashOutline } from 'react-icons/io5';
import { BsLightning, BsWifi } from 'react-icons/bs';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import RecentCard from './RecentCard';

const data = [
  {
    icon: IoWaterOutline,
    title: 'Water Bill',
    status: 'Successfully',
    amount: '120'
  },
  {
    icon: IoCashOutline,
    title: 'Income Salary',
    status: 'Received',
    amount: '4500'
  },
  {
    icon: BsLightning,
    title: 'Electric Bill',
    status: 'Successfully',
    amount: '150'
  },
  {
    icon: BsWifi,
    title: 'Internet Bill',
    status: 'Successfully',
    amount: '60'
  }
];

const RecentActivities = () => {
  return (
    <Flex direction="column">
      <Text fontSize="xl" fontWeight="bold">
        Recent Activities
      </Text>
      <Text color="gray.400">02 Mar 2021</Text>
      {data.map((props, key) => (
        <RecentCard key={key} {...props} />
      ))}
    </Flex>
  );
};

export default RecentActivities;
