const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { GraphQLError } = require("graphql");

const userQuerys = {
	async users() {
		return await prisma.user.findMany();
	},
	profile: {
		async resolve(parent, { userId }, context) {
			return await prisma.profile.findUnique({ where: { userID: +userId } });
		},
	},
	profiles: {
		async resolve() {
			return await prisma.profile.findMany();
		},
	},
	user: {
		async resolve(parent, { id }, context) {
			const user = await prisma.user.findUnique({ where: { id: +id } });

			if (user == null) {
				throw new GraphQLError("user not found!", {
					extensions: { code: "BAD_REQUEST" },
				});
			}

			return user;
		},
	},
	membership: {
		async resolve(parent, { userId }) {
			return await prisma.membership.findUnique({ where: { userId: +userId } });
		},
	},
};

module.exports = { userQuerys };
