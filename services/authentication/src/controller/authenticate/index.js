const authenticateUseCase = require('../../useCases/authenticateUser')
const { emailValidate } = require('../../intercepter')

const AuthenticateController = {
    execute: (req, res) => {
        const { phone } = req.query
        const { email, password } = req.body
        if (!emailValidate(email)) {
            return res.status(401).send({ message: 'Invalid user'})
        }
        authenticateUseCase(email, password, {
            channel: phone ? 'phone' : 'email'
        }).then((result) => {
            const { status_code, message, body } = result
            return res.status(status_code || 400).send({ message, body })
        }).catch(() => {
            return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
        })
        
    }
}

module.exports = AuthenticateController