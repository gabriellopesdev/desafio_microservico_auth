const router = require('express').Router()
const User = require('./controller/user')

router.get('/', (req, res) => {
   const doc = {
      api: 'Teste Técnico - GPTW - Serviço Mock',
      repository: 'https://github.com/gabriellopesdev/test_gptw',
    }
    res.status(200).json(doc)
  })

router.post('/user', User.create)
router.get('/user', User.find)
router.put('/user', User.update)
router.delete('/user/:id', User.delete)

module.exports = router