const User = require('../../models/user')
async function createUser(email) {
    try {      
        const userData = await User.find(email)        
        return {
            status_code: 200,
            message:  ``,
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