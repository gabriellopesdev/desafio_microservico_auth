const UserSchema = require('../../repository/database/schemas/user')
const jwt = require('jsonwebtoken')
const { sendMail } = require('../../services/email')
const { sendSMS } = require('../../services/sms')

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
        return tempAccessCode
    },  

    sendSecondFactorAuth: async (secondFactor, tempAccessCode) => {
        const { channel, source } = secondFactor
        switch (channel) {
            case 'email':
                sendMail({
                    to: source,
                    subject: 'GPTW - 2FactorAuthorization',
                    text: `Inform de access code(${tempAccessCode}) to get the authorization token `
                })
                break;
            case 'phone':
                sendSMS({
                    to: source,
                    text: `Inform de access code(${tempAccessCode}) to get the authorization token`
                })
                break;
            default:
                throw new UserException(400, `Channel ${channel} for second factor not implemented`)
        }
    },

    validateTempAccessCode: async (email, tempAccessCode) => {
        const [user] = await UserSchema.find({ email, temp_access_code: tempAccessCode})
        if (!user) {
            throw new UserException(401, 'Invalid email or access code')
        }
        await UserSchema.updateOne({ email, temp_access_code: tempAccessCode }, 
                                   { temp_access_code: '' })

        return true
    },
    
    generateBearerToken: (email) => {  
        const token = jwt.sign( { email }, process.env.SECRET, {
            expiresIn: '1d'
        })
        return token
    },

    validateToken: (token) => {
        const decodedToken = jwt.verify(String(token), String(process.env.SECRET), 
        function(error, decoded) {
            return (decoded)
        })   

        if (!decodedToken) { 
            throw new UserException(401, 'Invalid token')
        }

        return {
            message: 'Valid token provided',
            body: {
                content: decodedToken.email
            }
        }
    }

}

module.exports = userModule