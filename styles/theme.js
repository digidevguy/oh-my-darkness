import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
	...chakraTheme.fonts,
	heading: 'Questrial, sans-serif',
	body: 'Cutive Mono, monospace',
};

export const theme = extendTheme({ fonts });
