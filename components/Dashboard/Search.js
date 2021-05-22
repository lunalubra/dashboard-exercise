import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { FiSearch } from 'react-icons/fi';
import Icon from '@chakra-ui/icon';
import React from 'react';
import { Flex } from '@chakra-ui/layout';

const Search = () => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon boxSize={5} as={FiSearch} />}
        />
        <Input bg="white" border="none" rounded="full" placeholder="Search" />
      </InputGroup>
    </Flex>
  );
};

export default Search;
