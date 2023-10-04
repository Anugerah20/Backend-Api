const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());
require("dotenv").config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

// Mongodb connect
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${db_username}:${db_password}@nodeapi.twsmmh3.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connect Mongodb");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Route
app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About Nabil");
});

// Page 404
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});
