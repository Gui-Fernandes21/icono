const userMutations = `
  createUser(data: UserCreationInput!): AuthPayload!
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
`

module.exports = userMutations;