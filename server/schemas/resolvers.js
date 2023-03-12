const { User, MealPlan } = require('../models');

const resolvers = {
    Query: {
        // xyz: async () => {}

        // get user info
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId});
        },
        // get user food preferences

        // get user diet

        // get ingredients?

    },

    Mutation: {
        // xyz: async (parent, {}) => {}

        // post create new user
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });

            return user;
        },
        // post create user meal plan --> built with api?

        // put update user

        // put food preference

        // put generate new user diet

        // put replace ingredient in existing diet

        // delete meal plan

        // delete user

    }
};

module.exports = resolvers;