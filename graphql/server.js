const { GraphQLServer } = require("graphql-yoga");
const { makeExecutableSchema } = require('@graphql-tools/schema');

const resolvers = require("./resolvers/index.js");
const typeDefs = require('./schema/index.js');


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})



const server = new GraphQLServer({
  schema,
  context: async function (request) {
    return {
      ...request,
    };
  },
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
