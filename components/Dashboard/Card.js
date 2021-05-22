import { BsThreeDotsVertical } from 'react-icons/bs';
import { Flex, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import React from 'react';

const Card = ({ icon, title, amount }) => {
  return (
    <Flex p="20px" direction="column" bg="brand.200" rounded="14">
      <Flex
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Icon as={icon} boxSize={10} color="white" />
        <Icon as={BsThreeDotsVertical} color="white" />
      </Flex>
      <Text mt="15px" fontSize="lg" color="white">
        {title}
      </Text>
      <Text mt="10px" fontSize="3xl" fontWeight="bold" color="white">
        ${amount}
      </Text>
    </Flex>
  );
};

export default Card;
