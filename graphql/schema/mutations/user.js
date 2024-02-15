const userMutations = `
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
  addMembership(data: createMembershipInput!): Membership
  updateProfile(data: ProfileInput!): Profile
`;

module.exports = userMutations;
