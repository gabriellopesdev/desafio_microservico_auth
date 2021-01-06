const createUser = require('../../useCases/createUser')
const updateUser = require('../../useCases/updateUser')
const findUser = require('../../useCases/findUser')
const deleteUser = require('../../useCases/deleteUser')

const { emailValidate } = require('../../intercepter')

const User = {
    create: (req, res) => {
        const { email, password, phone } = req.body
        if (!emailValidate(email)) {
            return res.status(400).send({ message: 'Invalid email provided'})
        }
        createUser({ 
            email, 
            password, 
            phone 
        }).then((result) => {
            const { status_code, message, body } = result
            return res.status(status_code || 400).send({ message, body })
        }).catch(() => {
            return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
        })        
    },
    update: (req, res) => {
        const { email, password, phone } = req.body
        if (!emailValidate(email)) {
            return res.status(400).send({ message: 'Invalid email provided'})
        }
         updateUser({ 
            email, 
            password, 
            phone 
        }).then((result) => {
            const { status_code, message, body } = result
            return res.status(status_code || 400).send({ message, body })
        }).catch(() => {
            return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
        })  
    },
    find: (req, res) => {
        const { email } = req.query
        if (!emailValidate(email)) {
            return res.status(400).send({ message: 'Invalid query param'})
        }
        findUser(email).then((result) => {
            const { status_code, message, body } = result
            return res.status(status_code || 400).send({ message, body })
        }).catch(() => {
            return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
        })  
    },
    delete: (req, res) => {
        const { id } = req.params
        deleteUser(id).then((result) => {
            const { status_code, message, body } = result
            return res.status(status_code || 400).send({ message, body })
        }).catch(() => {
            return res.status(400).send({ message: 'Occurred an error. Please, try again later' })
        })  
    }
}

module.exports = User