const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const family = await connection('family_history').select('*');

        return response.json(family);
    },

    async create(request, response){
        const{
            relationship,
            dateOFBirth,
            deceased,
            ageAtDeath,
            ageMeasureDeath,
            deathDate,
            ProblemDiagno,
            clinicalDescription,
            problemDetectionAge,
            ageMeasurement,
            causeOfDeath,
            causeOfDeathDescription,
            comment
        } = request.body;

        const [id] = await connection('family_history').insert({
            relationship,
            dateOFBirth,
            deceased,
            ageAtDeath,
            ageMeasureDeath,
            deathDate,
            ProblemDiagno,
            clinicalDescription,
            problemDetectionAge,
            ageMeasurement,
            causeOfDeath,
            causeOfDeathDescription,
            comment
        })

        return response.json({
            id,
            relationship,
            dateOFBirth,
            deceased,
            ageAtDeath,
            ageMeasureDeath,
            deathDate,
            ProblemDiagno,
            clinicalDescription,
            problemDetectionAge,
            ageMeasurement,
            causeOfDeath,
            causeOfDeathDescription,
            comment
        });
    }
}