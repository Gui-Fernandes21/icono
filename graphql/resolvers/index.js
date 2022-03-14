const { academyMutations } = require("./mutations/academyMutations");
const { userMutations } = require("./mutations/userMutations");
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
  },
};

module.exports = resolvers;
