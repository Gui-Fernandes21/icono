const { ApolloServer } = require("apollo-server");

const resolvers = require("./graphql/resolvers/index.js");
const typeDefs = require("./graphql/schema/index.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    methods: ["GET", "PUT", "POST"],
    origin: "*",
  },  
});

server.listen(4001).then((url) => {
  console.log(`listening on port ${url.port}`);
});
