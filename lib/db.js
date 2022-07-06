import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.j3wgn.mongodb.net/${process.env.DB_DBNAME}?retryWrites=true&w=majority`
	);

	return client;
}
