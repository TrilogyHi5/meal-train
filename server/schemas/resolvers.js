//const { AuthenticationError } = require('apollo-server-express');
const { User, MealPlan } = require('../models');
//const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // users: async () => {
        //     return User.find();
        // },

        // // get user info
        // user: async (parent, { userId }) => {
        //     return User.findOne({ _id: userId });
        // },
        // // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        // me: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOne({ _id: context.user._id });
        //     }
        //     //throw new AuthenticationError('You need to be logged in!');

        // },
        // get user food preferences

        // get user diet

        // get ingredients?

    },

    Mutation: {
        addUser: async (parent, { firstName, lastName, email, password }) => {
            const user = await User.create({ firstName, lastName, email, password });
            //const token = signToken(user);
            return user;
        },
        // login: async (parent, { email, password }) => {
        //     const user = await User.findOne({ email });

        //     // if (!user) {
        //     //     throw new AuthenticationError('No user found with this email address');
        //     // }

        //     const correctPw = await user.isCorrectPassword(password);

        //     // if (!correctPw) {
        //     //     throw new AuthenticationError('Incorrect credentials');
        //     // }

        //     //const token = signToken(user);

        //     //return { token, user };
        // },

        // addUserProps: async (parent, { height, weight, sex, dob, activityLevel }) => {
        //     const userProps = await User.create({ height, weight, sex, dob, activityLevel });

        //     return userProps;
        // },
        // updateUser: async (parent, { firstName, lastName, email, password }) => {
        //     const updatedUser = await User.findOneAndUpdate({ firstName, lastName, email, password });
        //     //const token = signToken(updatedUser);
        //     //return { token, updatedUser };
        // },

        // addUpdatedProps: async (parent, { height, weight, sex, dob, activityLevel }) => {
        //     const updatedProps = await User.findByIdAndUpdate({ height, weight, sex, dob, activityLevel });

        //     return updatedProps;
        // },


        // post create user meal plan --> built with api?

        //<-------------------------------------NEW CODE------------------------------------------------------------------------------->
            // Add a third argument to the resolver to access data in our `context`
        // updateUser: async (parent, { firstName, lastName, email, password }, context) => {
        //     // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             { _id: profileId },
        //             {
        //                 $addToSet: { meals: MealPlan },
        //             },
        //             {
        //                 new: true,
        //                 runValidators: true,
        //             }
        //         );
        //     }
        //     // If user attempts to execute this mutation and isn't logged in, throw an error
        //     throw new AuthenticationError('You need to be logged in!');
        // },

        // Set up mutation so a logged in user can only remove their profile and no one else's
        // removeUser: async (parent, args, context) => {
        //     if (context.user) {
        //         return User.findOneAndDelete({ _id: context.user._id });
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
        // Make it so a logged in user can only remove a skill from their own profile
        // removeMealPlan: async (parent, { MealPlan }, context) => {
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             { $pull: { meals: MealPlan } },
        //             { new: true }
        //         );
        //     }
        //     throw new AuthenticationError('You need to be logged in!');
        // },
    },
};

// put update user

// put food preference

// put generate new user diet

// put replace ingredient in existing diet

// delete meal plan

// delete user



module.exports = resolvers;