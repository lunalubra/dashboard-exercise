import { Flex } from '@chakra-ui/layout';
import React from 'react';

const getProps = (amount, spacing) => {
  const cards = [];

  for (let i = 0; i < amount; i++) {
    cards.push({
      width: `${100 - 5 * i - 2.5}%`,
      opacity: 1 - 1 / (amount + 1) - i * (1 / (amount + 1)),
      top: `${20 + 10 * spacing * i}px`,
      zIndex: i
    });
  }

  return cards;
};

const DeepEffect = ({
  children,
  amount = 3,
  spacing = 1,
  color,
  marginDisabled = false
}) => {
  const usedAmount = +amount >= 5 ? 4 : +amount;

  const cards = getProps(usedAmount, +spacing);
  return (
    <Flex
      mb={!marginDisabled && spacing * usedAmount + usedAmount}
      position="relative"
      direction="column"
      alignItems="center"
    >
      <Flex position="relative" zIndex={usedAmount + 1}>
        {children}
      </Flex>
      {cards.map((card, cardid) => (
        <Flex
          key={cardid}
          w={card.width}
          h="90%"
          position="absolute"
          zIndex={card.zIndex}
          top={card.top}
          bg={color}
          rounded="28"
          opacity={card.opacity}
          shadow="2xl"
        ></Flex>
      ))}
    </Flex>
  );
};

export default DeepEffect;
