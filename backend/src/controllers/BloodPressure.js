const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const breath = await connection('bloodPressure').select('*');

        return response.json(breath);
    },
    
    async create(request, response){
        const{
            historic,
            systotic,
            diastotic,
            bloodPressure,
            pulsePressure,
            clinicalInterpretation,
            commentary,
            position,
            sleepStatus,
            factors,
            tilted,
            clamp,
            measurementLocation,
            method,
            systoticForm,
            finalDiastole,
            bloodPressuerForm,
            diastoliPressure
        } = request.body;

        const [id] = await connection('bloodPressure').insert({
            historic,
            systotic,
            diastotic,
            bloodPressure,
            pulsePressure,
            clinicalInterpretation,
            commentary,
            position,
            sleepStatus,
            factors,
            tilted,
            clamp,
            measurementLocation,
            method,
            systoticForm,
            finalDiastole,
            bloodPressuerForm,
            diastoliPressure
        })
        return response.json({
            id,
            historic,
            systotic,
            diastotic,
            bloodPressure,
            pulsePressure,
            clinicalInterpretation,
            commentary,
            position,
            sleepStatus,
            factors,
            tilted,
            clamp,
            measurementLocation,
            method,
            systoticForm,
            finalDiastole,
            bloodPressuerForm,
            diastoliPressure
        });
    }
}