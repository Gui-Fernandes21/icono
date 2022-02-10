const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { user, staff, student } = prisma;

const utilFunctions = {
  async createAndConnect(param) {
    if (param === "STUDENT") {
      const createdStudent = await student.create({
        data: {
          gym_id: 1,
        },
      });
      return createdStudent;
    }

    if (param === "PROFESSOR") {
      const createdStaff = await staff.create({
        data: {
          role: param,
        },
      });
      return createdStaff;
    }

    if (param === "OWNER") {
      const createdStaff = await staff.create({
        data: {
          role: param,
        },
      });
      return createdStaff;
    }
  },

  async searchAndDestroy(targetUser) {
    

    if (targetUser.staff_id) {
      await staff.delete({ where: { id: targetUser.staff_id } });
    }
    if (targetUser.student_id) {
      await student.delete({ where: { id: targetUser.student_id } });
    }
  },
};

module.exports = utilFunctions;
