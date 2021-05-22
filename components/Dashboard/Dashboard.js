import InProgress from './Pages/InProgress';
import { useNavigation } from '../../hooks';
import { Flex } from '@chakra-ui/layout';
import { Pages } from '../../constants';
import Home from './Pages/Home';
import React from 'react';

const Dashboard = () => {
  const { page } = useNavigation();

  return (
    <Flex w="65%" bg="gray.100">
      {page === Pages.home ? <Home /> : <InProgress />}
    </Flex>
  );
};

export default Dashboard;
