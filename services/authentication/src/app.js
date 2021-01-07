require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const Connection = require('./config/database')
const specs = require('./config/swagger_doc')

class AppController {

    constructor() {        
        this.express = express()
        this.middlewares()
        this.routes()
        this.con = new Connection()
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use('/docs', swaggerUi.serve, swaggerUi.setup(specs))  
    }

    routes() {
        this.express.use(routes)
    }
}

module.exports = AppController