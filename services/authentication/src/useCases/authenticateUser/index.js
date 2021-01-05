const User = require('../../models/user')

async function authenticateUser(email, password, secondFactor) {
    try {
        const userData = await User.searchUser(email)
        await User.validatePassword(password, userData.password)
        const tempAccessCode = await User.generateTempAccessCode(userData.email)
        const message = await User.sendSecondFactorAuth(secondFactor, tempAccessCode)
        return {
            status_code: 200,
            message:  `User authenticated. ${message}`
        }        
    } catch (error) {
        return {
            status_code: error.status_code,
            message: error.message
        }
    }
}

module.exports = authenticateUser