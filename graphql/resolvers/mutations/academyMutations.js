const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { user, academy } = prisma;

const academyMutations = {
  createAcademy: {
    async resolve(parent, { data }) {
      const activeUser = await user.findUnique({ where: { id: +data.userId } });

      if (
        activeUser.clearance === "OWNER" ||
        activeUser.clearance === "MASTER"
      ) {
        return await academy.create({
          data: {
            name: data.name,
            owner_id: +data.userId,
            staff: {
              create: {
                role: "OWNER",
                user: {
                  connect: {
                    id: +data.userId,
                  },
                },
              },
            },
          },
        });
      } else {
        throw new Error("You must be an Owner to create an Academy");
      }
    },
  },
};

module.exports = { academyMutations };
