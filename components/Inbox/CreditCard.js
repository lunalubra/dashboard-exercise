import { Flex } from '@chakra-ui/layout';
import Image from 'next/image';
import React from 'react';

const CreditCard = () => {
  return (
    <Flex
      minW="320px"
      maxW="320px"
      minH="225px"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <Image src="/creditcard.svg" alt="credit card" layout="fill" />
    </Flex>
  );
};

export default CreditCard;
