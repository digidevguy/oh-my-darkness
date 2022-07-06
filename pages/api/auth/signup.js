import connectDB from '../../../middleware/mongodb';
import { hashPassword } from '../../../lib/auth';
import User from '../../../models/User';

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { username, email, password } = req.body;

		if (
			!email ||
			!email.includes('@') ||
			!password ||
			password.trim().length < 8
		) {
			res.status(422).json({ message: 'Invalid input, please try again' });
		}

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			res
				.status(422)
				.json({ message: 'User already exists, please try again.' });
		}

		const hashedPassword = await hashPassword(password);

		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			admin: false,
		});

		try {
			const result = await newUser.save();
			res.status(201).json({
				message: 'User created!',
				username: newUser.username,
				email: newUser.email,
				admin: newUser.admin,
			});
		} catch (err) {
			res
				.status(500)
				.json({ message: 'Something went wrong, please try again.' });
		}
	}
};

export default connectDB(handler);
