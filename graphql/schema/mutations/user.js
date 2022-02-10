const userMutations = `
  createUser(data: UserCreationInput!): User!
  changeUserStatus(data: ChangeUserStatusInput!): User!
`

module.exports = userMutations;