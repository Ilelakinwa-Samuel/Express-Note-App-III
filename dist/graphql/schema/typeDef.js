"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
// Define your GraphQL schema
const typeDefs = (0, apollo_server_express_1.gql) `
  type Note {
    id: ID!
    title: String!
    content: String!
  }

  type Query {
    getNotes: [Note!]!
  }

  type Mutation {
    createNote(title: String!, content: String!): Note!
  }
`;
exports.typeDefs = typeDefs;
// schema/typeDefs.ts
// import { gql } from "graphql";
// const typeDefs = gql`
//   type Note {
//     id: ID!
//     title: String!
//     content: String!
//   }
//   type Query {
//     getNotes: [Note!]!
//   }
//   type Mutation {
//     createNote(title: String!, content: String!): Note!
//   }
// `;
// export default typeDefs;
// import {
//   GraphQLInt,
//   GraphQLSchema,
//   GraphQLString,
//   GraphQLObjectType,
//   GraphQLEnumType,
// } from "graphql";
// import { UserAttributes } from "../../model/user";
// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: {
//     id: { type: GraphQLString },
//     fullame: { type: GraphQLString },
//     password: { type: GraphQLString },
//     phone: { type: GraphQLInt },
//     gender: { type: GraphQLString },
//     address: { type: GraphQLString },
//   },
// });
// const NoteType = new GraphQLObjectType({
//   name: "Note",
//   fields: {
//     id: { type: GraphQLString },
//     Title: { type: GraphQLString },
//     Description: { type: GraphQLString },
//     Duedate: { type: GraphQLInt },
//     Status: { type: GraphQLString },
//   },
// });
// input GetInput {
//   id: String!
// }
