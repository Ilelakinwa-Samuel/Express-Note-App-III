"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        getNotes: async () => {
            // Implement your logic to fetch notes from your database
            return [];
        },
    },
    Mutation: {
        createNote: async (_, args) => {
            // Implement your logic to create a new note in your database
            const { title, content } = args;
            const newNote = { id: "1", title, content };
            return newNote;
        },
    },
};
exports.default = resolvers;
