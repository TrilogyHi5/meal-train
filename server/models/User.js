const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true, 
        //trim: true,
    },
    lastName: {
        type: String,
        required: true, 
        //trim: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        //in MongoDB we can use match as the validator, 1 step stopshop
        match: [/.+@.+\..+/, 'Please use a valid email address!'],
    },
    password: {
        type: String,
        required: true, 
        minlength: 5 
    },
    apiId: {
        type: String
    },
    // subdocument
    properties: {
        //do not use requires in order to be able to use these for second form after created user/logged in
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
        preferences: {
            // push food ids from api into array
            ingredients: [{ 
                type: Schema.Types.ObjectId
            }]
        },
        // collect array of daily meals from meal plan model
        meals: [{
            type: Schema.Types.ObjectId,
            ref: 'mealPlan'
        }]
    }
});

//set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
