const router = require('express').Router()
const User = require('./controller/user')

router.get('/', (req, res) => {
   const doc = {
      api: 'Teste Técnico - GPTW - Serviço Mock',
      repository: 'https://github.com/gabriellopesdev/test_gptw',
    }
    res.status(200).json(doc)
  })

/**
 * @swagger
 * /user:
 *    post:
 *       tags:
 *       - Create new user           
 *       description: 
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "User"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/user"
 *       responses:
 *         "201":
 *           description: "User created"
 *           schema:
 *              $ref: "#/definitions/created_user"
 *         "401":
 *           description: "Invalid token or no token provided"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.post('/user', User.create)

/**
 * @swagger
 * /user:
 *    get:
 *       tags:
 *       - Find user      
 *       description: 
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "email"
 *         in: "query"
 *         description: "User"
 *         required: true
 *         allowReserved: true
 *         schema:
 *             type: "String"
 *       responses:
 *         "200":
 *           description: "Seached user exists"
 *           schema:
 *              $ref: "#/definitions/created_user"
 *         "204":
 *           description: "User not found" 
 *         "401":
 *           description: "Invalid token or no token provided"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.get('/user', User.find)

/**
 * @swagger
 * /user:
 *    put:
 *       tags:
 *       - Update existent user           
 *       description: 
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "body"
 *         in: "body"
 *         description: "User"
 *         required: true
 *         schema:
 *             $ref: "#/definitions/user"
 *       responses:
 *         "201":
 *           description: "User updated"
 *           schema:
 *              $ref: "#/definitions/created_user"
 *         "401":
 *           description: "Invalid token or no token provided"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.put('/user', User.update)

/**
 * @swagger
 * /user:
 *    delete:
 *       tags:
 *       - Delete user      
 *       description: 
 *       produces:
 *       - "application/json"
 *       parameters:
 *       - name: "id"
 *         in: "path"
 *         description: "User id"
 *         required: true
 *         schema:
 *             type: "String"
 *       responses:
 *         "200":
 *           description: "Delete was deleted"
 *           schema:
 *              $ref: "#/definitions/empty_response"
 *         "401":
 *           description: "Invalid token or no token provided"
 *         "400":
 *           description: "Occurred an error. Please, try again later"
 */
router.delete('/user/:id', User.delete)

module.exports = router