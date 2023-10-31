"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: {
        id: { type: graphql_1.GraphQLString },
        fullame: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLInt },
        gender: { type: graphql_1.GraphQLString },
        address: { type: graphql_1.GraphQLString },
    },
});
const NoteType = new graphql_1.GraphQLObjectType({
    name: "Note",
    fields: {
        id: { type: graphql_1.GraphQLString },
        Title: { type: graphql_1.GraphQLString },
        Description: { type: graphql_1.GraphQLString },
        Duedate: { type: graphql_1.GraphQLInt },
        Status: { type: graphql_1.GraphQLString },
    },
});
