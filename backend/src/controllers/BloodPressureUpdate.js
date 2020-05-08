const connection = require('../database/connection');

module.exports = {
    async index(request, response, next){
        try {
            const id = request.params.id;
            const blood = await connection('bloodPressure').where('id', id).select('*').first();
            return response.json(blood);
        } catch (error) {
            next(error);
        }
        
    },

    async update(request, response, next){
        try{
            const {id} = request.params;
            const blood = await connection('bloodPressure')
                .where('id', id)
                .select('*')
                .first();
    
            if(blood.id != id || blood.id === undefined){
                console.log(blood.id, id)
                return response.status(error.status).json({error: 'id not found'});
            }
    
            await connection('bloodPressure').where('id', id).update({
                historic: request.body.historic,
                systotic: request.body.systotic,
                diastotic: request.body.diastotic,
                bloodPressure: request.body.bloodPressure,
                pulsePressure: request.body.pulsePressure,
                clinicalInterpretation: request.body.clinicalInterpretation,
                commentary: request.body.commentary,
                position: request.body.position,
                sleepStatus: request.body.sleepStatus,
                factors: request.body.factors,
                tilted: request.body.tilted,
                clamp: request.body.clamp,
                measurementLocation: request.body.measurementLocation,
                method: request.body.method,
                systoticForm: request.body.systoticForm,
                finalDiastole: request.body.finalDiastole,
                bloodPressuerForm: request.body.bloodPressuerForm,
                diastoliPressure: request.body.diastoliPressure,
            })

            return response.status(200).json({mensager: 'Data updated successfully'});
        }catch(error){
            console.log(error)
            next(error);

        }

    }
}