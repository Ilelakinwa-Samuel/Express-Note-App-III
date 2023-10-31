"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_1 = __importDefault(require("../model/user"));
const UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: {
        user: {
            type: graphql_1.GraphQLString,
            args: {
                id: { type: graphql_1.GraphQLString },
            },
            resolve(_parentValue, _args) {
                return user_1.default.find({});
            },
        },
    },
});
exports.default = graphql_1.GraphQLObjectType;
