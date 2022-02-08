const { gql } = require('apollo-server');

const userMutations = require('./mutations/user.js');
const academyMutations = require('./mutations/academy.js')


const typeDefs = gql`
type Query {
  users: [User]
}

type Mutation {
  ${userMutations}
  ${academyMutations}
}

type User {
  name: String
  email: String
}

type Academy {
  id: ID!
  name: String!

  students: [User]
}

input UserCreationInput {
  name: String
  email: String
  secret: String
}

input AcademyCreationInput {
  name: String
}
`; 

module.exports = typeDefs