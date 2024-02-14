const userMutations = `
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
  addMembership(data: ID!): Membership
  updateProfile(data: ProfileInput!): Profile
`

module.exports = userMutations;