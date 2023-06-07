const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://product-crud:RILvKKQbubqk8BH9@cluster0.undypbz.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// Middleware
app.use(cors());
app.use(express.json());

const run = async () => {
  try {
    const productCollection = client.db("productCRUD").collection("products");

    // send data to the MongoDB server
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
      console.log(result);
    });
  } finally {
  }
};
run().catch(console.dir);

// base API
app.get("/", (req, res) => {
  res.send("Product CRUD server is running");
});

// App listener
app.listen(port, () => {
  console.log(`Product CRUD server is running on http://localhost:${port}`);
});
