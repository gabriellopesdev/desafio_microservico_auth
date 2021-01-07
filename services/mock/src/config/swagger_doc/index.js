const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')

const options = {
    swaggerDefinition: {      
      info: {
        title: 'GPTW - Service Mock',
        version: '1.0.0',
        description: 'CRUD for Users',
        contact: {
          name: 'Gabriel Lopes',
          email: 'gabslopes34@gmail.com',
          url: 'https://github.com/gabriellopesdev'
        },
      },
      securityDefinitions: {      
          ApiKeyAuth: { 
            description: "Token JWT expira após 1 dia",
            type: "apiKey",
            in: "header", 
            name: "x-access-token" 
          }, 
      },       
      host: process.env.APP_URL || 'localhost:3002',       
      tags: [],
      schemes:['https', 'http'],  
      definitions: {
        user: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'    
            }, 
            phone: {
              type: 'string'    
            }, 
          }          
        },
        empty_response: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            },
            body: {
              type: 'object'    
            }, 
          }          
        },
        created_user: {
          type: 'object',
          properties: {
            message: {
              type: 'string'
            },
            email: {
              type: 'object',
              properties: {
                id: {
                  type: 'string'
                },
                email: {
                  type: 'string'
                },
                password: {
                  type: 'string'    
                }, 
                phone: {
                  type: 'string'    
                },
                created_at: {
                  type: 'timestamp'    
                },
              }
            },             
          }          
        },
      }   
    },    
    apis: [ path.resolve( __dirname, '..', '..', 'routes.js') ],     
  }
  
module.exports = swaggerJsdoc(options)