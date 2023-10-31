import Note from "../model/notes";
import User from "../model/user";
import { UserAttributes } from "../model/user";

// Create typescript interfaces for the input types
interface GetInput {
  id: string;
  email: string;
}

interface GetUser {
  input: GetInput;
}

const resolvers = {
  Query: {
    notes: async () => {
      try {
        const notes = await Note.find({});
        return notes;
      } catch (error) {}
    },

    users: async () => {
      const users = await User.find({});
      return users;
    },

    user: async (_parent: unknown, args: GetUser, _context: unknown) => {
      const { id } = args.input;
      const user = await User.findById(id);
      return user;
    },
  },
};

export default resolvers;
