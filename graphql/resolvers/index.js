const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { academyMutations } = require("./mutations/academyMutations");
const { userMutations } = require("./mutations/userMutations");
const { authMutations } = require("./mutations/authMutations");

const { userQuerys } = require("./querys/userQuerys");



const resolvers = {
	Query: {
    ...userQuerys,
	},
	Mutation: {
		...userMutations,
		...academyMutations,
		...authMutations,
	},
};

module.exports = resolvers;
