const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { academy } = prisma;

const academyQueries = {
	academies: {
		async resolve() {
			return await academy.findMany();
		},
	},
	
};

module.exports = { academyQueries };
