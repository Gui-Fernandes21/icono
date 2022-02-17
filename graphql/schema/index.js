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
  clearance: Clearance

  staff_id: ID
  student_id: ID
}

type Student {
  id: ID
  
  user: User
  gym: Academy
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
  ownerId: ID!
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

  clearance: Clearance
}

input AcademyCreationInput {
  userId: ID!
  name: String!
}

input ChangeUserStatusInput {
  userId: ID!
  clearance: Clearance!

  gymId: ID
}

input ConnectUserAcademyInput {
  academyId: ID!
  userId: ID!
}

enum Role {
  PROFESSOR
  OWNER
}

enum Clearance {
  REGULAR
  STUDENT
  PROFESSOR
  OWNER
  MASTER
}
`;

module.exports = typeDefs;
