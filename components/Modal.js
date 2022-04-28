import {
	Modal as ChakraModal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Flex,
	SimpleGrid,
	Button,
} from '@chakra-ui/react';

const Modal = ({ isOpen, onClose, cardValues }) => {
	return (
		<ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<Flex flexDirection='column' gap='1rem' p={2}>
					<SimpleGrid templateColumns='repeat(5,1fr)'>
						{cardValues &&
							cardValues.map((item, i) => (
								<Flex
									maxW='7rem'
									key={i}
									border='1px solid'
									alignItems='center'
									justifyContent='center'
									p={2}
									transition='ease-in 0.25s'
									backgroundColor={item.isClicked ? 'blue.400' : 'blue.200'}
									textDecoration={item.isClicked ? 'line-through' : 'none'}
									data-id={i}
									textAlign='center'
								>
									{item.label}
								</Flex>
							))}
					</SimpleGrid>
					<Button size='md' onClick={onClose}>
						Close
					</Button>
				</Flex>
			</ModalContent>
			<ModalFooter></ModalFooter>
		</ChakraModal>
	);
};

export default Modal;
