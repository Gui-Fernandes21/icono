const { academyMutations } = require('./mutations/academyMutations');
const { userMutations } = require('./mutations/userMutations');


const resolvers = {
  Query: {
    users() {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    ...userMutations,
    ...academyMutations
  },
};

module.exports = resolvers;
