const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys')

const userSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, keys.jwtSecret)
    console.log(token)
    console.log(keys.jwtSecret)
    this.tokens = this.tokens.concat({ token })
    await this.save()

    return token
}

userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({ username })

    if(!user) {
        throw new Error ('Login Failed')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        throw new Error ('Login Failed')
    }

    return user
}

// hash password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User