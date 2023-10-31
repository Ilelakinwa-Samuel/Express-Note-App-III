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
// resolvers/noteResolver.ts
// import { IResolvers } from "graphql";
// import { NoteSchema } from ./model/; // Assuming you have a NoteModel defined
// import { model } from "mongoose";
// const resolvers: IResolvers = {
//   Query: {
//     getNotes: async () => {
//       try {
//         const notes = await NoteModel.find();
//         return notes;
//       } catch (error) {
//         throw new Error("Error fetching notes");
//       }
//     },
//   },
//   Mutation: {
//     createNote: async (_, args) => {
//       const { title, content } = args;
//       try {
//         const newNote = new NoteModel({ title, content });
//         await newNote.save();
//         return newNote;
//       } catch (error) {
//         throw new Error("Error creating note");
//       }
//     },
//   },
// };
// export default resolvers;
// import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
// import User from "../../model/user";
// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: {
//     user: {
//       type: GraphQLString,
//       args: {
//         id: { type: GraphQLString },
//       },
//       resolve(_parentValue, _args) {
//         return User.find({});
//       },
//     },
//   },
// });
// export default GraphQLObjectType;
