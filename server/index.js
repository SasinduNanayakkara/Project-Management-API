const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development"
}));

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})