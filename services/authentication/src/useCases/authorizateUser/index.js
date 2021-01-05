const User = require('../../models/user')

async function authorizateUseCase(email, accessCode) {
    try {
        await User.validateTempAccessCode(email, accessCode)
        const token = User.generateBearerToken(email)
        return {
            status_code: 200,
            message:  `User authorizated`,
            body: {
                token
            }
        }        
    } catch (error) {
        return {
            status_code: error.status_code,
            message: error.message
        }
    }
}

module.exports = authorizateUseCase