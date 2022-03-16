const userMutations = `
  changeUserStatus(data: ChangeUserStatusInput!): User!
  connectUserAcademy(data: ConnectUserAcademyInput!): String
`

module.exports = userMutations;