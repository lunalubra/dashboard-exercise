import { IconButton } from '@chakra-ui/button';
import Icon from '@chakra-ui/icon';
import { Flex, Text } from '@chakra-ui/layout';
import React from 'react';

const RecentCard = ({ title, status, amount, icon }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      mt="10px"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex w="100%" h="100%" direction="row">
        <IconButton
          w="48px"
          h="100%"
          mr="10px"
          icon={<Icon as={icon} boxSize={6} color="white" />}
          bg="brand.100"
          rounded="14"
        />
        <Flex direction="column">
          <Text fontSize="md" fontWeight="semibold">
            {title}
          </Text>
          <Text color="gray.400">{status}</Text>
        </Flex>
      </Flex>
      <Text fontSize="xl" fontWeight="semibold">
        ${amount}
      </Text>
    </Flex>
  );
};

export default RecentCard;
