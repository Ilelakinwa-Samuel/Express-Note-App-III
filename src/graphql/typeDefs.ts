import Note from "../model/notes";
import NoteAttributes from "../model/user";

const typeDefs = `#graphql
  type Query {
    notes: [Note!]!
    users: [User!]!
    user (input: GetInput): User!
  }

  type Note {
    title: String!
    description: String
    dueDate: String
    status: String
    userId: String!
  }

  type User {
    username: String!
    email: String!
    password: String
    passwordCreatedAt: String
  }

  input GetInput {
      id: String!
      email: String!
  }
`;

export default typeDefs;
