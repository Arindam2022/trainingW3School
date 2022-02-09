import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, image, description, address } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://arindam1:czbPYkoi97d8YN8d@cluster0.kjk7l.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const result = await meetupCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted" });
  }
}
export default handler;
