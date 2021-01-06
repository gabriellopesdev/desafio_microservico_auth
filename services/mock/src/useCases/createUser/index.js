const User = require('../../models/user')
async function createUser(user) {
    try {      
        const userData = await User.create(user)        
        return {
            status_code: 201,
            message:  `User created.`,
            body: userData
        }        
    } catch (error) {
        return {
            status_code: error.status_code,
            message: error.message
        }
    }
}

module.exports = createUser