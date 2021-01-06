const User = require('../../models/user')
async function createUser(user) {
    try {      
        const userData = await User.update(user)        
        return {
            status_code: 200,
            message:  `User updated.`,
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