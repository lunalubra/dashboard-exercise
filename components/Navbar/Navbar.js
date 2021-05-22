import { IconButton } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import {
  BiTrophy,
  BiAnalyse,
  BiHomeAlt,
  BiBriefcaseAlt,
  BiMessageAltDetail
} from 'react-icons/bi';
import { HiOutlineReceiptTax } from 'react-icons/hi';

import React from 'react';
import { useNavigation } from '../../hooks';
import { Pages } from '../../constants';

const Navbar = () => {
  const { page, setPage } = useNavigation();

  return (
    <Flex w="10%" pt="7%" direction="column" bg="gray.200">
      <Flex direction="column">
        <IconButton
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.home && '1px'}
          borderRightColor={page === Pages.home && 'brand.100'}
          onClick={() => setPage(Pages.home)}
          icon={<Icon boxSize={8} as={BiHomeAlt} />}
        />
        <IconButton
          mt="30px"
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.page1 && '1px'}
          borderRightColor={page === Pages.page1 && 'brand.100'}
          onClick={() => setPage(Pages.page1)}
          icon={<Icon boxSize={8} as={BiAnalyse} />}
        />
        <IconButton
          mt="30px"
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.page2 && '1px'}
          borderRightColor={page === Pages.page2 && 'brand.100'}
          onClick={() => setPage(Pages.page2)}
          icon={<Icon boxSize={8} as={BiBriefcaseAlt} />}
        />
        <IconButton
          mt="30px"
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.page3 && '1px'}
          borderRightColor={page === Pages.page3 && 'brand.100'}
          onClick={() => setPage(Pages.page3)}
          icon={<Icon boxSize={8} as={BiMessageAltDetail} />}
        />
        <IconButton
          mt="30px"
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.page4 && '1px'}
          borderRightColor={page === Pages.page4 && 'brand.100'}
          onClick={() => setPage(Pages.page4)}
          icon={<Icon boxSize={8} as={BiTrophy} />}
        />
        <IconButton
          mt="30px"
          bg="gray.200"
          borderRadius="0"
          borderRightWidth={page === Pages.page5 && '1px'}
          borderRightColor={page === Pages.page5 && 'brand.100'}
          onClick={() => setPage(Pages.page5)}
          icon={<Icon boxSize={8} as={HiOutlineReceiptTax} />}
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
