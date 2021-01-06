const UserSchema = require('../../repository/database/schemas/user')
const bcrypt = require('bcryptjs')

function UserException(code, message) {
    this.status_code = code
    this.message = message
}

const userModule = {

    find: async (email) => {
        const [user] = await UserSchema.find( { 'email': email } ) 
        if (!user) {
            throw new UserException(204, 'User not found')
        }
        return {
            id: user._id,
            email: user.email,
            password: user.password,
            phone: user.phone
        }
    },

    create: async (user) => {
        const { email, password, phone } = user
        const cryptPassword = await bcrypt.hash(password, 5)
        const createdUser = await UserSchema.create({
            email,
            password: cryptPassword,
            phone,
        })
        return createdUser
    },

    update: async (user) => {
        const { email, password, phone } = user
        const cryptPassword = await bcrypt.hash(password, 5)
        const updatedUser = await UserSchema.findOneAndUpdate(
            { email: user.email }, 
            { email, password: cryptPassword, phone },
            { new: true })
        return updatedUser
    },  

    delete: async (id) => {
        const result = await UserSchema.findByIdAndDelete(id)
        return result
    },   
  

}

module.exports = userModule