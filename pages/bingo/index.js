import { useEffect, useState } from 'react';
import {
	Button,
	Checkbox,
	Flex,
	Input,
	SimpleGrid,
	useToast,
} from '@chakra-ui/react';

const bingoList = Array.from(Array(25), (x, index) => ({
	label: index + 1,
	isClicked: false,
}));

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
		setCardValues(shuffleValues(bingoList));
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
		<Flex justify='center' align='center' flexDirection='column' gap='2rem'>
			<Flex as='form' flexDirection='column' gap='1rem' onSubmit={handleSubmit}>
				<SimpleGrid templateColumns='repeat(5,1fr)'>
					{cardValues &&
						cardValues.map((item, i) => (
							<Flex
								key={i}
								border='1px solid'
								alignItems='center'
								justifyContent='center'
								p={4}
								_hover={{ backgroundColor: 'gray.200' }}
								backgroundColor={item.isClicked ? 'blue.200' : 'green.300'}
								textDecoration={item.isClicked ? 'line-through' : 'none'}
								data-id={i}
								onClick={handleToggle}
							>
								{item.label}
							</Flex>
						))}
				</SimpleGrid>

				<Flex flexDirection='column' gap='1rem'>
					<Input
						placeholder='Ryohou Kamina'
						name='playerName'
						value={playerName}
						onChange={handlePlayerNameChange}
					/>
					<Checkbox onChange={() => setIsBingo(!isBingo)}>Bingo?</Checkbox>
					<Button type='submit' colorScheme='blue'>
						Submit
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default BingoPage;
