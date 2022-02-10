const userMutations = `
  createUser(data: UserCreationInput!): User!
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
`

module.exports = userMutations;