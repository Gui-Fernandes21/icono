const userMutations = `
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
  addMembership(data: ID!): Membership
`

module.exports = userMutations;