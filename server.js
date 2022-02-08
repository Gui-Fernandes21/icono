const { GraphQLServer } = require("graphql-yoga");
const { resolvers } = require("./graphql/resolvers");

const server = new GraphQLServer({
  // typeDefs: "./graphql/schema.graphql",
  typeDefs: "./graphql/schema.graphql",
  resolvers,
});

const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground",
};

server.start(options, ({ port }) => {
  console.log("Listening on port " + port);
});
