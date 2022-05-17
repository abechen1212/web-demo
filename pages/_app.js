import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<RecoilRoot>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecoilRoot>
		</ChakraProvider>
	);
}

export default MyApp;
