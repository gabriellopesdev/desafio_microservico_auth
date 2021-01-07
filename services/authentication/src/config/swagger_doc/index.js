const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')

const options = {
    swaggerDefinition: {      
      info: {
        title: 'GPTW - Service Authenticate',
        version: '1.0.0',
        description: '',
        contact: {
          name: 'Gabriel Lopes',
          email: 'gabslopes34@gmail.com',
          url: 'https://github.com/gabriellopesdev'
        },
      },    
      host: process.env.APP_URL || 'localhost:3002',       
      tags: [],
      schemes:[ 'https', 'http'],  
      definitions: {
        credential_authenticate: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'    
            }, 
          }          
        },
        credential_authentorizate: {
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            access_code: {
              type: 'string'    
            },
          }          
        },
        token: {
          type: 'object',
          properties: {
            token: {
              type: 'string'    
            },
          } 
        },
        authentication_response: {
            type: 'object',
            properties: {
              message: {
                type: 'string'    
              }, 
            }
        },
        authorization_response: {
          type: 'object',
          properties: {
            message: {
              type: 'string'    
            }, 
            token: {
              type: 'object',
              properties: {
                  token: {
                      type: 'string'
                  }
              }
            }
          } 
        },
        authorization_validate_response: {
            type: 'object',
            properties: {
              message: {
                type: 'string'    
              }, 
              body: {
                type: 'object',
                properties: {
                    content: {
                        type: 'string'
                    }
                }
              }
            } 
          }
      }   
    },    
    apis: [ path.resolve( __dirname, '..', '..', 'routes.js') ],     
  }
  
module.exports = swaggerJsdoc(options)