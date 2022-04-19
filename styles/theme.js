import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
	...chakraTheme.fonts,
	heading: 'Lato, sans-serif',
	// body: 'Cutive Mono, monospace',
	body: 'Questrial, sans-serif',
};

export const theme = extendTheme({ fonts });
