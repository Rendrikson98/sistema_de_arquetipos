const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const breath = await connection('breath').select('*');

        return response.json(breath);
    },

    async create(request, response){
        const{
            history,
            presence,
            frequency,
            regularity,
            depth,
            clinicalDescription,
            clinicalInterpretation,
            comment,
            bodyPosition,
            confoundingFactors
        } = request.body;

        const [id] = await connection('breath').insert({
            history,
            presence,
            frequency,
            regularity,
            depth,
            clinicalDescription,
            clinicalInterpretation,
            comment,
            bodyPosition,
            confoundingFactors
        })

        return response.json({
            id, 
            history, 
            presence, 
            frequency,
            regularity,
            depth,
            clinicalDescription,
            clinicalInterpretation,
            comment,
            bodyPosition,
            confoundingFactors});
    }
}
