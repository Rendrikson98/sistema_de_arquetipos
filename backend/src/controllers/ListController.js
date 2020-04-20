const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const incidents = await connection('exam').select('*');
        return response.json(incidents);
    },

    async update(request, response){
        try{
            const {id} = request.params;
            const incident = await connection('exam')
                .where('id',id)
                .select('*')
                .first();
                
            if(incident.id != id || incident.id === undefined){
                return response.status(404).json({error: 'id no found'});
            }
    
            await connection('exam').where('id', id).update({
                systeOrEstru: request.body.systeOrEstru,
                bodyLocation: request.body.bodyLocation,
                noAbnormality: request.body.noAbnormality,
                clinicalDescription: request.body.clinicalDescription,
                clinicalInterpretation: request.body.clinicalInterpretation,
                comment: request.body.comment,
            });
    
            return response.status(200).json({mensager: 'Data updated successfully'});

        }catch(error){
            return response.status(404).json({error: 'id not found'});
        }
    }
}