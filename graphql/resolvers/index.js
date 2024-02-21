const { academyMutations } = require("./mutations/academyMutations");
const { userMutations } = require("./mutations/userMutations");
const { authMutations } = require("./mutations/authMutations");

const { userQueries } = require("./queries/userQueries");
const { academyQueries } = require('./queries/academyQueries')



const resolvers = {
	Query: {
    ...userQueries,
		...academyQueries
	},
	Mutation: {
		...userMutations,
		...academyMutations,
		...authMutations,
	},
};

module.exports = resolvers;
