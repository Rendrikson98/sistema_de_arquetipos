const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('exam').select('*');
        return response.json(incidents);
    },
}