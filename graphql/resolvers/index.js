const { academyMutations } = require("./mutations/academyMutations");
const { userMutations } = require("./mutations/userMutations");
const { authMutations } = require("./mutations/authMutations");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    async users() {
      return await prisma.user.findMany();
    },
  },
  Mutation: {
    ...userMutations,
    ...academyMutations,
    ...authMutations
  },
};

module.exports = resolvers;
