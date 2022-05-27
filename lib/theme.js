import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    100: '#f7fafc',
    900: '#1a202c',
  },
};

const fonts = {
  heading: "'Roboto Slab', serif",
};

const theme = extendTheme({
  colors,
  fonts,
});

export default theme;
