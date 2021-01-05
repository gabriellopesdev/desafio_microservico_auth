const UserSchema = require('../../repository/database/schemas/user')
const bcrypt = require('bcryptjs')

function UserException(code, message) {
    this.status_code = code
    this.message = message
}

const userModule = {

    searchUser: async (email) => {
        const [user] = await UserSchema.find( { 'email': email } ) 
        if (!user) {
            throw new UserException(401, 'User not found')
        }
        return {
            email: user.email,
            password: user.password
        }
    },

    validatePassword: async (requestPassword, cryptPassword) => {
        const match = await bcrypt.compare(requestPassword, cryptPassword)
        if (!match) {
            throw new UserException(401, 'Invalid password')
        }
    },

    generateTempAccessCode: async (email) => {
        const tempAccessCode = String(Math.ceil(Math.random() * 2718281)).substring(0, 7)
        await UserSchema.updateOne({ email }, { temp_access_code: tempAccessCode })
    },  

    sendSecondFactorAuth: async (secondFactor, tempAccessCode) => {
        
    },

    validateTempAccessCode: async (email, tempAccessCode) => {

    },

}

module.exports = userModule