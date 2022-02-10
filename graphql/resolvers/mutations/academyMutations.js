const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { user, academy, staff } = prisma;

const academyMutations = {
  createAcademy: {
    async resolve(parent, { data }) {
      const activeUser = await user.findUnique({ where: { id: +data.userId } });

      if (activeUser.clearance === "OWNER") {
        const createdAcademy = await academy.create({
          data: { name: data.name },
        });

        const userStaff = await staff.update({
          where: { id: activeUser.staff_id },
          data: { gym_id: createdAcademy.id },
        });

        return createdAcademy;
      } else {
        throw new Error("You must be an Owner to create an Academy");
      }
    },
  },
};

module.exports = { academyMutations };
