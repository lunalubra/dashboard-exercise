import { IconButton } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import React from 'react';
import { BiBell, BiCalendarAlt } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { Avatar, AvatarBadge } from '@chakra-ui/avatar';

const Navbar = () => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="flex-end">
      <IconButton
        mr="10px"
        icon={<Icon boxSize={8} as={BiCalendarAlt} />}
        bg="gray.200"
      />
      <IconButton
        mr="10px"
        icon={<Icon boxSize={8} as={BiBell} />}
        bg="gray.200"
      />
      <Avatar mr="10px" name="Lucas Acosta" src="/avatar.jpg" alt="avatar img">
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <IconButton
        icon={<Icon boxSize={8} as={IoIosArrowDown} />}
        bg="gray.200"
      />
    </Flex>
  );
};

export default Navbar;
