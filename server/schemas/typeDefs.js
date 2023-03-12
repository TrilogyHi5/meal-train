const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        age: Int
        height: Int
        weight: Int
        sex: String
    }

    type MealPlan {
        _id: ID!
        breakfast: String!
        snack_one: String!
        lunch: String!
        snack_two: String!
        dinner: String!
    }

    type Query {
        user: (_id: ID!): User
        meals: [MealPlan]
    }
`;

module.exports = typeDefs;