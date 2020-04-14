const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const exam = await connection('exam').select('*');

        return response.json(exam);
    },

    async create(request, response){
        const {
            systeOrEstru, 
            bodyLocation, 
            noAbnormality, 
            clinicalDescription, 
            clinicalInterpretation, 
            comment 
        } = request.body; 

        const [id] = await connection('exam').insert({
            systeOrEstru,
            bodyLocation,
            noAbnormality,
            clinicalDescription,
            clinicalInterpretation,
            comment
        })

        return response.json({id, systeOrEstru, bodyLocation, noAbnormality, clinicalDescription, clinicalInterpretation, comment})

    }
}