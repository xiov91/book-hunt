const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('books');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('books');
        },
        books: async (parent, { title }) => {
            const params = title ? { title } : {};
            return Book.find(params);
        },
        book: async (parent, { bookId }) => {
            return Book.findOne({ bookId });
        } 
        
    }
};

module.exports = resolvers;