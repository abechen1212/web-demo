import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Container } from '@chakra-ui/react';

import React from 'react';

export default function Layout({ children, router }) {
	return (
		<Box pb={6}>
			<Navbar />
			<Container maxW="container.xl" pt={20} backgroundColor="red">
				{children}
			</Container>
			<Footer />
		</Box>
	);
}
