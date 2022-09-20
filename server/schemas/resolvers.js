const { User, Book } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return Book.find();
        },
        book: async (parent, { bookId }) => {
            return Book.findONe({ bookId });
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('books');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('books');
        }

    }
};

module.exports = resolvers;