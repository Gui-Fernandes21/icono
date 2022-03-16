const authMutations = `
  signup(data: SignupInput!): AuthPayload!
  login(data: LoginInput!): AuthPayload!
`;

module.exports = authMutations;