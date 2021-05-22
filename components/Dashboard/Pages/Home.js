import { Flex } from '@chakra-ui/layout';
import Analytic from '../Analytic';
import History from '../History';
import Header from '../Header';
import Cards from '../Cards';
import React from 'react';

const Home = () => {
  return (
    <Flex w="100%" p="50px" direction="column">
      <Header />
      <Cards />
      <Analytic />
      <History />
    </Flex>
  );
};

export default Home;
