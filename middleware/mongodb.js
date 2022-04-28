import mongoose from 'mongoose';

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}

	const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j3wgn.mongodb.net/ohmydarkness?retryWrites=true&w=majority`;

	// Use new db connection
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return handler(req, res);
};

export default connectDB;

export async function connectAuthDB() {
	const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j3wgn.mongodb.net/ohmydarkness?retryWrites=true&w=majority`;

	// Use new db connection
	const client = await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client;
}
