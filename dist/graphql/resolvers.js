"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_1 = __importDefault(require("../model/notes"));
const user_1 = __importDefault(require("../model/user"));
const resolvers = {
    Query: {
        notes: async () => {
            try {
                const notes = await notes_1.default.find({});
                return notes;
            }
            catch (error) { }
        },
        users: async () => {
            const users = await user_1.default.find({});
            return users;
        },
        user: async (_parent, args, _context) => {
            const { id } = args.input;
            const user = await user_1.default.findById(id);
            return user;
        },
    },
};
exports.default = resolvers;
