const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
//const  = require('./');

const userSchema = new Schema({
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timeStamp => moment(timeStamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    activityLevel : {
        type: String,
        required: true
    },
    preferences: {
        type: String
    },
    allergies: {
        type: String
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

const User = mongoose.model('User', userSchema);

module.exports = User;
