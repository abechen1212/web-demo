import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import Layout from '../components/layout/Main';
import Fonts from '../components/Fonts';
import theme from '../lib/theme';

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
