const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://pardon:pardon@cluster0.8nz7r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const database = client.db("userCollection").collection("pardonsTerritory");
        // create a document to insert
        const doc = {
            title: "Record of a Shriveled Datum",
            content: "No bytes, no problem. Just insert a document, in MongoDB",
        }
        const result = await database.insertOne(doc);
        console.log(`A document was inserted with the _id: ${result.insertedId}`);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`I am listening to ${port}`)
})