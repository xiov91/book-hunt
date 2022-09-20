const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        author: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
        
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: String
        user(username: String!): User
    }

    type Query {
        books: [Book]
    }
`;

module.exports = typeDefs;