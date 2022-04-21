import { IconButton, useColorMode } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<IconButton
				icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				bg='none'
			/>
		</>
	);
};

export default DarkModeSwitch;
