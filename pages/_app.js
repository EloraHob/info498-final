import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  /* eslint-disable react/no-unescaped-entities */
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
  /* eslint-disable react/no-unescaped-entities */
}

export default MyApp;
