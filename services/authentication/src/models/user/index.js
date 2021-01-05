const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        unique: true
    },
    temp_access_code: String,
    password: String,   
    created_at: {
        type: Date,
        default: Date.now
    }       
  })

module.exports = mongoose.model("user", UserSchema);