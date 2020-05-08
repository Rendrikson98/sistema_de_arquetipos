const connection = require('../database/connection');

module.exports = {
    async index(request, response, next){
        try {
            const id = request.params.id;
            const incident = await connection('exam').where({id}).select('*').first();
            return response.json(incident);
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next){
        try{
            const {id} = request.params;
            const incident = await connection('exam')
                .where({id})
                .select('*')
                .first();
                
            if(incident.id != id || incident.id === undefined){
                return response.status(error.status).json({error: 'id no found'});
            }
    
            await connection('exam').where({id}).update({
                systeOrEstru: request.body.systeOrEstru,
                bodyLocation: request.body.bodyLocation,
                noAbnormality: request.body.noAbnormality,
                clinicalDescription: request.body.clinicalDescription,
                clinicalInterpretation: request.body.clinicalInterpretation,
                comment: request.body.comment,
            });
    
            return response.status(200).json({mensager: 'Data updated successfully'});

        }catch(error){
            console.log(error)
            next(error);
        }
    }
}