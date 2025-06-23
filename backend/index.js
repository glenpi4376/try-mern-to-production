const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors({
  origin: "https://test-mern-deploy-to-production.netlify.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@try-mern-to-production.ut0kcox.mongodb.net/add-to-production?retryWrites=true&w=majority");
const db = mongoose.connection;

db.on("error", (error) => console.log("Error in Database Connection"));
db.on("open", () => console.log("Database Connected Successfully"));


const text = require("./storeText");
app.use("/text", text);

app.listen(1111, () => {
    console.log("Server is Live");
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb://127.0.0.1:27017";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const database = client.db("add-to-production");
//const colls = database.listCollections();

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
