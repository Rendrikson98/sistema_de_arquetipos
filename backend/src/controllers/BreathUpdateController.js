const connection = require('../database/connection');

module.exports ={
    async index(request, response){
        const id = request.params.id;
        const incident = await connection('breath').where('id', id).select('*').first();
        return response.json(incident);
    },

    async update(request, response){
        try{
            const {id} = request.params;
            const incident = await connection('breath')
                .where('id', id)
                .select('*')
                .first();
            if(incident.id != id || incident.id === undefined){
                return response.status(404).json({error: 'id no found'});
            }

            await connection('breath').where('id', id).update({
                history: request.body.history,
                presence: request.body.presence,
                frequency: request.body.frequency,
                regularity: request.body.regularity,
                depth: request.body.depth,
                clinicalDescription: request.body.clinicalDescription,
                clinicalInterpretation: request.body.clinicalInterpretation,
                comment: request.body.comment,
                bodyPosition: request.body.bodyPosition,
                confoundingFactors: request.body.confoundingFactors,
            })

            return response.status(200).json({mensager: 'Data updated successfully'});
        }catch(error){
            console.log(error);
            return response.status(404).json({error: 'id not found'});
        }
    }
}