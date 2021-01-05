const authorizateUseCase = require('../../useCases/authorizateUser')
const { emailValidate } = require('../../intercepter')

const AuthorizateController = {
    execute: (req, res) => {
        const { email, access_code } = req.body
        if (!emailValidate(email)) {
            return res.status(401).send({ message: 'Invalid user'})
        }
        authorizateUseCase(email, access_code)
            .then((result) => {
                const { status_code, message, body } = result
                return res.status(status_code || 400).send({ message, body })
            })
            .catch(() => {
                return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
            })
        
    }
}

module.exports = AuthorizateController