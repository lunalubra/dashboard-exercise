import { ChakraProvider } from '@chakra-ui/react';
import { NavigationProvider } from '../hooks';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <NavigationProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NavigationProvider>
  );
}

export default MyApp;
