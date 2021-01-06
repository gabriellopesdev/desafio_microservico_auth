const axios = require('axios')

const api = axios.create({
    baseURL:  process.env.API_AUTHENTICATE
})

const AunthenticateService = {
    validateToken: async (token) => {
        try {
            const response = await api.post('authorization/validate', { token }) 
            return {
                status_code: response.status,
                message: response.data.message,
                body: response.data.body 
            }            
        } catch (error) {
            return {
                status_code: 400
            }  
        }
    }
}

module.exports = AunthenticateService
