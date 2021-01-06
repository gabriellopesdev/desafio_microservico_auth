const AuthenticateService = require('../../services/authenticate')

 async function validateToken(req, res, next) {
    const token = req.headers['x-access-token']
    if (!token) { 
        return res.status(401).json({ message: 'No token provided.' })    
    }
    const result =  await AuthenticateService.validateToken(token)
    console.log('result',result)
    if (result.status_code !== 200) { 
        return res.status(401).json({ message: 'Failed to validate token.' })
    }    
    next()
}

module.exports = { validateToken }