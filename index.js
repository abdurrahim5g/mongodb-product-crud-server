const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json());

// base API
app.get("/", (req, res) => {
  res.send("Product CRUD server is running");
});

// App listener
app.listen(port, () => {
  console.log(`Product CRUD server is running on http://localhost:${port}`);
});
