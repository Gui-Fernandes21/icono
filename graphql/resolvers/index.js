const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    users() {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: {
      async resolve(parent, { data }) {
        const createdUser = await prisma.user.create({
          data: {
            email: data.email,
            name: data.name,
            secret: data.secret,
          },
        });

        return createdUser;
      },
    },
    createAcademy: {
      async resolve(parent, { data }) {
        const createdAcademy = await prisma.academy.create({
          data: { name: data.name },
        });
        return createdAcademy;
      },
    },
  },
};

module.exports = resolvers;
