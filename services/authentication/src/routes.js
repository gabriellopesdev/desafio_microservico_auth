const router = require('express').Router()
const AuthenticateController = require('./controller/authenticate')
const AuthorizateController = require('./controller/authorizate')


router.get('/', (req, res) => {
   const doc = {
      api: 'Teste Técnico - GPTW - Serviço Authentication',
      repository: 'https://github.com/gabriellopesdev/test_gptw',
    }
    res.status(200).json(doc)
  })

router.post('/authenticate', AuthenticateController.execute)
router.post('/authorizate', AuthorizateController.execute)


module.exports = router