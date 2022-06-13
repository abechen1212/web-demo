import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import { useRouter } from 'next/router';

const Desktop = ({ children }) => {
  const router = useRouter();
  console.log(router.pathname);
  const isLoginPage = router.pathname === '/demo/desktop/login';
  return (
    <Box px={10} color="#D8D8D8" backgroundColor="#0D172A" minHeight="100vh">
      {!isLoginPage ? <Navbar imgUrl="/haro-logo2.png" /> : null}
      {children}
    </Box>
  );
};

export default Desktop;
