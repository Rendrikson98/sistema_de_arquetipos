const crypto = require('crypto');
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

        const id = crypto.randomBytes(4).toString('HEX');

        const result = await connection('exam').insert({
            id,
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