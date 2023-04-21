const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const port = process.env.PORT || 8080;

const app = express();

//connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
