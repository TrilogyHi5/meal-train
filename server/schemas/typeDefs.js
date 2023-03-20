const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        apiId: String!
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
        #Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
        #me: User (hold for JWT integration)
        meals: [MealPlan]
    }

    type Mutation {
        addUser(firstName: String, lastName: String, email: String, password: String) : User
        login(email: String!, password: String!): User
        addMeals(userId: ID!, meal: String!): User
        removeUser: User
        removeMeals(meal: String!): User
        #Auth was turn on That's why Apollo Server wouldn't launch ---> login(email: String!, password: String!): Auth
        #addProperties(userId: ID!, height: Int, weight: Int, sex: String, dob: String, activityLevel: String) : User
        #updateUser(firstName: String!, lastName: String!, email: String!, password: String!) : Auth 
        #removeUser(): User
        addApiId(userId: ID!, apiId: String!) : User
    }
`;

module.exports = typeDefs;