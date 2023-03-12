const { User, MealPlan } = require('../models');

const resolvers = {
    Query: {
        // get user info
        // xyz: async (parent, {}) => {}

        // get user food preferences

        // get user diet

        // get ingredients?

    },

    Mutation: {
        // post create new user
        addUser: async (parent, { firstName, lastName, email, password }) => {
            return User.create();
        },
        // put update user

        // put food preference

        // put generate new user diet

        // put replace ingredient in existing diet

        // delete meal plan

        // delete user

    }
};

module.exports = resolvers;