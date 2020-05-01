const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const [count] = await connection('exam').count();

        const incidents = await connection('exam')
            .select('*');

            response.header('Total-Exam', count['count(*)']);
        return response.json(incidents);
    },
}