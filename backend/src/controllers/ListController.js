const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('exam').count();

        const incidents = await connection('exam')
            .limit(6)
            .offset((page-1)*6)
            .select('*');

            response.header('Total-Exam', count['count(*)']);
        return response.json(incidents);
    },
}