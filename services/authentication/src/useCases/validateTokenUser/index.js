const User = require('../../models/user')

async function authorizateUseCase(token) {
    try {
        const { body, message } = await User.validateToken(token)
        return {
            status_code: 200,
            message,
            body
        }        
    } catch (error) {
        return {
            status_code: error.status_code,
            message: error.message
        }
    }
}

module.exports = authorizateUseCase