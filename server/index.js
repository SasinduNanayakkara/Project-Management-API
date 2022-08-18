const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const DBConnect = require("./config/database");
const app = express();

//connect to mongodb
DBConnect();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}));

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})