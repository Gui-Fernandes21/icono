const { gql } = require("apollo-server");

const userMutations = require("./mutations/user.js");
const academyMutations = require("./mutations/academy.js");
const authMutations = require('./mutations/auth.js');

const typeDefs = gql`
type Query {
  users: [User]
  profiles: [Profile]
  user(id: ID!): User
  profile(userId: ID!): Profile
  membership(userId: ID!): Membership
}

type Mutation {
  ${userMutations}
  ${academyMutations}
  ${authMutations}
}

type User {
  id: ID
  email: String!
  clearance: Clearance
  profile: Profile
  membership: Membership

  staff_id: ID
  student_id: ID
}

type Membership {
  id: ID
  status: Status
  type: TypeMembership
  expiry_date: String
  member_since: String
  payment: PaymentMethod
  userId: ID
}

type Profile {
  id: ID
  
  firstName: String
  lastName: String
  biography: String
  picUrl: String
  
  rank: Belt

  userID: ID
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

type AuthPayload {
  token: String!
  userId: ID!
}

input SignupInput {
  name: String!
  email: String!
  secret: String!
}

input LoginInput {
  email: String!
  secret: String!
}

input ProfileInput {
  userId: ID!
  
  firstName: String
  lastName: String
  picUrl: String
  biography: String
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

enum Belt {
  WHITE
  BLUE
  PURPLE
  BROWN
  BLACK
}

enum Status {
  ACTIVE
  EXPIRED
}

enum TypeMembership {
  MONTH
  TRIMESTER
  SEMESTER
  ANUAL
}

enum PaymentMethod {
  CARD
  CASH
  BANK
}
`;

module.exports = typeDefs;
