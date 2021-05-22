import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Inter',
    body: 'Inter'
  },
  colors: {
    brand: {
      100: '#2C2CE7',
      200: '#31374E',
      300: '#02D4FF'
    }
  }
});

export default theme;
