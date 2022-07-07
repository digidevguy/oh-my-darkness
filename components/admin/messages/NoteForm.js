import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';

const NoteForm = ({ id, isOpen, onClose, onSubmit }) => {
	const [status, setStatus] = useState('pending');
	const [note, setNote] = useState('');
	const [loading, setLoading] = useState(false);

	const handleStatusChange = (e) => {
		const { value } = e.target;
		setStatus(value);
	};

	const handleNoteChange = (e) => {
		const { value } = e.target;
		setNote(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const response = await onSubmit(id, { status, note });

		if (response) {
			setNote('');
			setLoading(false);
			onClose();
		} else {
			setLoading(false);
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent as='form' onSubmit={handleSubmit}>
				<ModalHeader>Update Message</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack>
						<Select variant='filled' onChange={handleStatusChange}>
							<option value='pending'>Pending</option>
							<option value='complete'>Completed</option>
							<option value='waiting-on-player'>Waiting for Player</option>
						</Select>
						<Textarea
							name='note'
							value={note}
							onChange={handleNoteChange}
							variant='filled'
						/>
					</VStack>
				</ModalBody>
				<ModalFooter gap='1rem'>
					<Button
						colorScheme='blue'
						type='submit'
						loadingText='Sending...'
						isLoading={loading}
						spinnerPlacement='start'
					>
						Update
					</Button>
					<Button
						leftIcon={<CloseIcon />}
						colorScheme='red'
						variant='outline'
						onClick={onClose}
					>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default NoteForm;
