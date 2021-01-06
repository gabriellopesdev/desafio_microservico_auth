const User = require('../../models/user')
async function deleteUser(id) {
    try {      
        await User.delete(id)        
        return {
            status_code: 200,
            message:  `User was removed`,
            body: {}
        }        
    } catch (error) {
        return {
            status_code: error.status_code,
            message: error.message
        }
    }
}

module.exports = deleteUser