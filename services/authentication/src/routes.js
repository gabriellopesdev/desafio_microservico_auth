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

router.post('/authentication', AuthenticateController.execute)
router.post('/authorization', AuthorizateController.execute)
router.post('/authorization/validate', AuthorizateController.validate)

module.exports = router