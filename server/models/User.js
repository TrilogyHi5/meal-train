const { Schema, model } = require('mongoose');
const emailVal = /[^\s]*@[a-z0-9.-]*/i;

const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        // required: true, // disabled for dev
        trim: true,
    },
    lastName: {
        type: String,
        // required: true, // disabled for dev
        trim: true,
    },
    email: {
        type: String,
        // required: true, // disabled for dev
        unique: true,
        // validate: { // disabled for dev
        //     validator: (input) => {
        //       return emailVal.test(input); 
        //     },
        //     message: 'Please use a valid email address.'
        // }
    },
    password: {
        type: String,
        // required: true, // disabled for dev
        // minlength: 5 // disabled for dev
    },
    // subdocument
    properties: {
        height: {
            type: Number,
            //required: true
        },
        weight: {
            type: Number,
            //required: true
        },
        sex: {
            type: String,
            //required: true
        },
        dateOfBirth: {
            type: Date,
            //required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeStamp => moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a')
        },
        activityLevel: {
            type: String,
            //required: true
        },
        // not sure about these
        // preferences: {
        //     type: String
        // },
        // allergies: {
        //     type: String
        // },    
        preferences: {
            // push food ids from api into array
            ingredients: [{ 
                type: Schema.Types.ObjectId
            }], 
            // push food ids from api into array
            allergies: [{ 
                type: Schema.Types.ObjectId
            }]
        },
        // collect array of daily meals from meal plan model
        meals: [{
            type: Schema.Types.ObjectId,
            ref: 'MealPlan'
        }]
    }
});

// set up pre-save middleware to create password
// userSchema.pre('save', async function (next) {
//     if (this.isNew || this.isModified('password')) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// };

const User = model('User', userSchema);

module.exports = User;
