import { BsCreditCard, BsNewspaper } from 'react-icons/bs';
import { AiOutlineBank } from 'react-icons/ai';
import { BiTransfer } from 'react-icons/bi';
import { Stack } from '@chakra-ui/layout';
import DeepEffect from '../DeepEffect';
import React from 'react';
import Card from './Card';

const data = [
  {
    icon: BsCreditCard,
    title: 'Transfer via Card number',
    amount: '1200'
  },
  {
    icon: BiTransfer,
    title: 'Transfer Other Banks',
    amount: '150'
  },
  {
    icon: AiOutlineBank,
    title: 'Transfer Same Bank',
    amount: '1500'
  },
  {
    icon: BsNewspaper,
    title: 'Transfer to Other Bank',
    amount: '1500'
  }
];

const Cards = () => {
  return (
    <Stack mt="40px" direction="row" alignItems="center">
      {data.map((props, key) => (
        <DeepEffect key={key} color="brand.200" marginDisabled="true">
          <Card {...props} />
        </DeepEffect>
      ))}
    </Stack>
  );
};

export default Cards;
