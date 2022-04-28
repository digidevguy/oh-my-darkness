import mongoose from 'mongoose';

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j3wgn.mongodb.net/${process.env.DB_DBNAME}?retryWrites=true&w=majority`;

const connectDB = (handler) => async (req, res) => {
	if (mongoose.connections[0].readyState) {
		// Use current db connection
		return handler(req, res);
	}

	// Use new db connection
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return handler(req, res);
};

export default connectDB;

export async function connectAuthDB() {
	// Use new db connection
	const client = await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
	return client;
}
