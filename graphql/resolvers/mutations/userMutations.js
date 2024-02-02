const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



const { createAndConnect, searchAndDestroy } = require("../utils/functions");
const { user, staff, student } = prisma;

const userMutations = {
  changeUserStatus: {
    async resolve(parent, { data }) {
      const activeUser = await user.findUnique({ where: { id: +data.userId } });

      if (activeUser.clearance === "MASTER") {
        throw new Error("You cannot modify the status of a master user!");
      }

      if (data.clearance === "MASTER") {
        throw new Error("Access denied!!!");
      }

      await searchAndDestroy(activeUser);

      if (data.clearance === "STUDENT") {
        const createdStudent = await createAndConnect(data.clearance);
        const updatedUser = await user.update({
          where: { id: +data.userId },
          data: {
            clearance: data.clearance,
            staff_id: undefined,
            student_id: createdStudent.id,
          },
        });
        return updatedUser;
      }

      if (data.clearance === "PROFESSOR") {
        const createdStaff = await createAndConnect(data.clearance);
        const updatedUser = await user.update({
          where: { id: +data.userId },
          data: {
            clearance: data.clearance,
            staff_id: createdStaff.id,
            student: undefined,
          },
        });
        return updatedUser;
      }

      if (data.clearance === "OWNER") {
        const gym_id = data.gymId;
        if (!gym_id) throw new Error("Must specify the id of the owned gym");
        const createdStaff = await createAndConnect(data.clearance, gym_id);
        const updatedUser = await user.update({
          where: { id: +data.userId },
          data: {
            clearance: data.clearance,
            staff_id: createdStaff.id,
            student: undefined,
          },
        });
        return updatedUser;
      }
    },
  },

  connectUserAcademy: {
    async resolve(parent, { data }) {
      const createdStudentId = await student.create({
        data: {
          gym_id: +data.academyId,
        },
        select: {
          id: true,
        },
      });

      await user.update({
        where: { id: +data.userId },
        data: { student_id: createdStudentId },
      });

      return "Connected Successfully";
    },
  },
};

module.exports = { userMutations };
