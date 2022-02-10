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
    changeUserStatus: {
      async resolve(parent, {data}) {
        
      }
    },
    createAcademy: {
      async resolve(parent, { data }) {
        const activeUser = await prisma.user.findUnique({
          where: {
            id: +data.userId,
          },
          select: {
            staff
          }
        });

        if (activeUser) {
          const createdAcademy = await prisma.academy.create({
            data: { name: data.name, staff: [activeUser] },
          });
          return createdAcademy;
        } else {
          throw new Error("not a valid user");
        }
      },
    },
  },
};

module.exports = resolvers;
