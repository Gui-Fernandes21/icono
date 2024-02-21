const userMutations = `
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
  addMembership(data: createMembershipInput!): Membership
  cancelMembership(id: ID!): Boolean
  updateProfile(data: ProfileInput!): Profile
`;

module.exports = userMutations;
