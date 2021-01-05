const authenticateUseCase = require('../../useCases/authenticateUser')
const { emailValidate } = require('../../intercepter')

const AuthenticateController = {
    execute: (req, res) => {
        const { phone } = req.query
        const { email, password } = req.body
        if (!emailValidate(email)) {
            return res.status(401).send({ message: 'Invalid user'})
        }
        authenticateUseCase(email, password, phone)
            .then((result) => {
                const { status_code, message, body } = result
                return res.status(status_code || 400).send({ message, body })
            })
        
    }
}

module.exports = AuthenticateController