const router = require('express').Router()

router.get('/', (req, res) => {
   const doc = {
      api: 'Teste Técnico - GPTW - Serviço Mock',
      repository: 'https://github.com/gabriellopesdev/test_gptw',
    }
    res.status(200).json(doc)
  })

module.exports = router