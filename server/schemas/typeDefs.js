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
        dateOfBirth: String
        createdAt: String
        activityLevel: String
        preferences: [Preference]
        meals: [MealPlan]
    }

    type Preference {
        _id: ID
        ingredients: [String]
        allergies: [String]
    }

    type MealPlan {
        _id: ID!
        breakfast: [String]
        snack_one: [String]
        lunch: [String]
        snack_two: [String]
        dinner: [String]
    }

    type Query {
        #users(): [User]
        user(userId: ID!): User
        #me: User (hold for JWT integration)
        meals: [MealPlan]
    }

    type Mutation {
        addUser(firstName: String, lastName: String, email: String, password: String) : User
        login(email: String!, password: String!): Auth
        #addUserProps(userId: ID!, height: Int, weight: Int, sex: String, dob: String, activityLevel: String) : User
        #updateUser(firstName: String!, lastName: String!, email: String!, password: String!) : Auth 
        #updateUserProps(height, weight, sex, dob, activityLevel): User
        #removeUser(): User
    }
`;

module.exports = typeDefs;