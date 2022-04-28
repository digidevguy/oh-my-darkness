import { useEffect, useState } from 'react';
import {
	Button,
	Checkbox,
	Flex,
	Input,
	Link as ChakraLink,
	SimpleGrid,
	Text,
	useToast,
} from '@chakra-ui/react';
import Image from 'next/image';

import bingoOptions from '../../lib/bingoOptions';
import Link from 'next/link';

const BingoPage = () => {
	const [cardValues, setCardValues] = useState([]);
	const [playerName, setPlayerName] = useState('');
	const [isBingo, setIsBingo] = useState(false);
	const toast = useToast();

	const shuffleValues = (arr) => {
		let currentIndex = arr.length,
			randomIndex;

		while (currentIndex != 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[arr[currentIndex], arr[randomIndex]] = [
				arr[randomIndex],
				arr[currentIndex],
			];
		}
		return arr;
	};

	useEffect(() => {
		setCardValues(shuffleValues(bingoOptions));
	}, []);

	useEffect(() => console.log(isBingo), [isBingo]);

	const handleToggle = (e) => {
		const id = e.target.dataset.id;
		const tempValues = [...cardValues];
		tempValues[id].isClicked = !tempValues[id].isClicked;
		setCardValues([...tempValues]);
	};

	const handlePlayerNameChange = (e) => {
		setPlayerName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch('/api/bingo', {
			method: 'POST',
			body: JSON.stringify({ cardValues, playerName, isBingo }),
			headers: { 'Content-Type': 'application/json' },
		});
		const { message } = await res.json();
		if (res.ok) {
			return toast({ title: message, status: 'success', isClosable: true });
		}
		toast({ title: message, status: 'error', isClosable: true });
	};

	return (
		<Flex
			justify='center'
			align='center'
			flexDirection='column'
			gap='2rem'
			minH='100vh'
		>
			<Flex
				as='form'
				flexDirection='column'
				gap='1rem'
				onSubmit={handleSubmit}
				bg='gray.500'
				p={4}
				boxShadow='sm'
				rounded={5}
			>
				<Image
					src='/images/OMD_Raid_bingo_-_title.png'
					width={779}
					height={186}
					layout='responsive'
				/>
				<SimpleGrid templateColumns='repeat(5,1fr)'>
					{cardValues &&
						cardValues.map((item, i) => (
							<Flex
								key={i}
								border='1px solid'
								alignItems='center'
								justifyContent='center'
								p={4}
								transition='ease-in 0.25s'
								_hover={{ backgroundColor: 'green.200' }}
								backgroundColor={item.isClicked ? 'blue.200' : 'green.300'}
								textDecoration={item.isClicked ? 'line-through' : 'none'}
								data-id={i}
								onClick={handleToggle}
								textAlign='center'
							>
								<Text maxW='7rem'>{item.label}</Text>
							</Flex>
						))}
				</SimpleGrid>

				<Flex flexDirection='column' gap='1rem'>
					<Input
						placeholder='Ryohou Kamina'
						name='playerName'
						value={playerName}
						onChange={handlePlayerNameChange}
						maxW={['full', '50%']}
						m='auto'
						variant='filled'
					/>
					<Checkbox alignSelf='center' onChange={() => setIsBingo(!isBingo)}>
						Bingo?
					</Checkbox>
					<Button w={['full', '50%']} m='auto' type='submit' colorScheme='blue'>
						Submit
					</Button>
				</Flex>
			</Flex>
			<Text>
				Want to see where you stand? Go to the{' '}
				<Link href='/bingo/history' passHref>
					<ChakraLink color='blue.300'>Game History Page</ChakraLink>
				</Link>
			</Text>
		</Flex>
	);
};

export default BingoPage;
