import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
