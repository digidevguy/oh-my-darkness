import {
	Divider,
	Flex,
	Heading,
	Text,
	useDisclosure,
	useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';

const BingoHistoryPage = () => {
	const [gameHistory, setGameHistory] = useState([]);
	const [modalValues, setModalValues] = useState([]);
	const [scores, setScores] = useState([]);
	// const [isOpen, setIsOpen] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const formatDate = (string) => {
		var options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(string).toLocaleDateString([], options);
	};

	const toggleOpen = (arr) => {
		setModalValues(arr);
		onOpen();
	};

	useEffect(() => {
		const fetchHistory = async () => {
			const res = await fetch('/api/bingo');
			const { message, history } = await res.json();

			if (!res.ok)
				toast({
					title: 'Error',
					description: message,
					status: error,
					isClosable: true,
				});
			setGameHistory(history);
			toast({
				title: 'Success',
				description: message,
				status: 'success',
				isClosable: true,
			});
		};
		fetchHistory();
	}, []);

	useEffect(() => console.log(gameHistory), [gameHistory]);
	useEffect(() => console.log(scores), [scores]);

	useEffect(() => {
		const scoreArr = [];
		gameHistory.forEach((game, i) => {
			const index = scoreArr.findIndex((i) => i.playerName === game.playerName);

			if (index !== -1) {
				scoreArr[index].score++;
			} else scoreArr.push({ playerName: game.playerName, score: 0 });
		});
		console.log(scoreArr);
		setScores(scoreArr);
	}, [gameHistory]);

	return (
		<Flex flexDirection='column' gap='1.5rem' justify='center' align='center'>
			<Modal isOpen={isOpen} onClose={onClose} cardValues={modalValues} />
			<Flex
				gap='1rem'
				flexDirection='column'
				border='1px solid'
				borderColor='gray.200'
				p={4}
				w='90%'
				boxShadow='sm'
			>
				<Heading alignSelf='center'>Current Scores</Heading>
				{scores &&
					scores.map((score, i) => (
						<Flex gap='1rem'>
							<Text>{score.playerName}: </Text>
							<Text>{score.score}</Text>
						</Flex>
					))}
			</Flex>
			<Divider />
			<Heading>Bingo History</Heading>
			<Divider />
			{gameHistory &&
				gameHistory.map((game, i) => (
					<Flex
						key={i}
						gap='1rem'
						border='1px solid'
						borderColor='gray.200'
						p={4}
						w={['95%', '75%', '50%']}
						justifyContent='space-between'
						boxShadow='md'
						onClick={() => toggleOpen(game.cardValues)}
						_hover={{
							backgroundColor: 'blue.200',
						}}
					>
						<Text>{game.playerName}</Text>
						<Text>{formatDate(game.date)}</Text>
						<Text>{game.isBingo ? 'Won' : 'Not so much'}</Text>
					</Flex>
				))}
		</Flex>
	);
};

export default BingoHistoryPage;
