const router = require('express').Router()
const AuthenticateController = require('./controller/authenticate')
const AuthorizateController = require('./controller/authorizate')


router.get('/', (req, res) => {
   const doc = {
      api: 'Teste Técnico - GPTW - Service Authentication',
      repository: 'https://github.com/gabriellopesdev/test_gptw',
    }
    res.status(200).json(doc)
  })
/**
 * @swagger
 * /authentication:
 *    post:
 *       tags:
 *       - Authentication           
 *       description: Authenticate an user and send second factor confirmation
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Credentials"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/credential_authenticate"
 *       - name: "phone"
 *         in: "query"
 *         description: "Optional phone number to send second factor authentication"
 *         required: false
 *         schema:
 *             type: "String"
 *       responses:
 *         "200":
 *           description: "Succeed authentication"
 *           schema:
 *              $ref: "#/definitions/authentication_response"
 *         "401":
 *           description: "Invalid credentials"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.post('/authentication', AuthenticateController.execute)

/**
 * @swagger
 * /authorization:
 *    post:
 *       tags:
 *       - Authorization           
 *       description: Authorizate an user and return access token
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Credentials"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/credential_authentorizate"
 *       responses:
 *         "200":
 *           description: "Succeed authorization"
 *           schema:
 *              $ref: "#/definitions/authorization_response"
 *         "401":
 *           description: "Invalid access code"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.post('/authorization', AuthorizateController.execute)

/**
 * @swagger
 * /authorization/validate:
 *    post:
 *       tags:
 *       - Validate authorization token           
 *       description: Validate a provided access token
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "Token"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/token"
 *       responses:
 *         "200":
 *           description: "Succeed authorization"
 *           schema:
 *              $ref: "#/definitions/authorization_validate_response"
 *         "401":
 *           description: "Invalid token"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.post('/authorization/validate', AuthorizateController.validate)

module.exports = router