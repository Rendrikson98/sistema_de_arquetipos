const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const id = request.params.id;
        const family = await connection('family_history').where('id', id).select('*').first();

        return response.json(family);
    },

    async update(request, response){
        try{
            const {id} = request.params;
            const incident = await connection('family_history')
                .where('id',id)
                .select('*')
                .first();
            if(incident.id != id || incident.id === undefined){
                return response.status(404).json({error: 'id no found'});
            }

            await connection('family_history').where('id', id).update({
            relationship: request.body.relationship,
            dateOFBirth: request.body.dateOFBirth,
            deceased: request.body.deceased,
            ageAtDeath: request.body.ageAtDeath,
            ageMeasureDeath: request.body.ageMeasureDeath,
            deathDate: request.body.deathDate,
            ProblemDiagno: request.body.ProblemDiagno,
            clinicalDescription: request.body.clinicalDescription,
            problemDetectionAge: request.body.problemDetectionAge,
            ageMeasurement: request.body.ageMeasurement,
            causeOfDeath: request.body.causeOfDeath,
            causeOfDeathDescription: request.body.causeOfDeathDescription,
            comment: request.body.comment
            })

            return response.status(200).json({mensager: 'Data updated successfully'});
        }catch(error){
            console.log(error)
            return response.status(404).json({error: 'id not found'});
        }
    }
}