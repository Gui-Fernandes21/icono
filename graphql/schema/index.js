const { gql } = require("apollo-server");

const userMutations = require("./mutations/user.js");
const academyMutations = require("./mutations/academy.js");

const typeDefs = gql`
type Query {
  users: [User]
}

type Mutation {
  ${userMutations}
  ${academyMutations}
}

type User {
  id: ID
  name: String!
  email: String!
}

type Student {
  id: ID
  
  user: User!
  gym: Academy!
}

type Staff {
  id: ID
  role: Role!
  
  user: User!
  gym: Academy!
}

type Academy {
  id: ID
  name: String!

  students: [Student]
  staff: [Staff]
}

type Classroom {
  id: ID

  staff: [Staff!]
  students: [Student]
}

input UserCreationInput {
  name: String
  email: String
  secret: String
}

input AcademyCreationInput {
  userId: ID!
  name: String!
}

input ChangeUserStatusInput {
  
}

enum Role {
  PROFESSOR
  OWNER
}
`;

module.exports = typeDefs;
