
//const { AuthenticationError } = require('apollo-server-express');
const { User, MealPlan } = require('../models');
//const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {


        //****YES LET'S TRY THIS */
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
            console.log(firstName, lastName, "First and last name")
            const user = await User.create({ firstName, lastName, email, password });
            //const token = signToken(user);
            return user;
        },


        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            // if (!user) {
            //     throw new AuthenticationError('No user found with this email address');
            // }

            // const correctPw = await user.isCorrectPassword(password);

            // if (!correctPw) {
            //     throw new AuthenticationError('Incorrect credentials');
            // }

            //     //const token = signToken(user);
            return { user };
            //     //return { token, user };
        },

        // Add a third argument to the resolver to access data in our `context`
        // addProperties: async (parent, { userId, properties }, context) => {
        //     // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        //     if (context.user) {
        //         return User.findOneAndUpdate(
        //             { _id: userId },
        //             {
        //                 $addToSet: { properties: property },
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
        

        // addMeals: async (parent, { userId, meal }, context) => {
        //     // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        //     if (context.user) {
        //         return User.findByIdAndUpdate(
        //             { _id: userId },
        //             {
        //                 $addToSet: { meals: meal },
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
//         removeUser: async (parent, args, context) => {
//             if (context.user) {
//                 return User.findOneAndDelete({ _id: context.user._id });
//             }
//             throw new AuthenticationError('You need to be logged in!');
//         },
//         // Make it so a logged in user can only remove a property from USER MOdel from their own profile
//         removeMeals: async (parent, { meal }, context) => {
//             if (context.user) {
//                 return User.findOneAndUpdate(
//                     { _id: context.user._id },
//                     { $pull: { meals: meal } },
//                     { new: true }
//                 );
//             }
//             throw new AuthenticationError('You need to be logged in!');
//         },
     },

 };














//<-------------------------------------just-in-case- CODE------------------------------------------------------------------------------->

// delete user

// removeUser: async (parent, { userId }) => {
//     return User.findByIdAndDelete({ _id: userId });
// },

// updateUser: async (parent, { firstName, lastName, email, password }) => {
//     const updatedUser = await User.findOneAndUpdate({ firstName, lastName, email, password });
//     //const token = signToken(updatedUser);
//     //return { token, updatedUser };
// },




// post create user meal plan --> built with api?



// put update user

// put food preference

// put generate new user diet

// put replace ingredient in existing diet

// delete meal plan

// delete user



module.exports = resolvers;