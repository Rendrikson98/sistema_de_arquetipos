const connection = require('../database/connection');

module.exports = {

    async index(request, response, next){
        try{
            const id = request.params.id;
            const incidents = await connection('admission').where('id', id).select('*').first();

            return response.json(incidents);
        }catch(error){
            console.log(error)
            next(error);
        }
    },

    async update(request, response, next){
        try{
            const {id} = request.params;
            const incident = await connection('admission').where('id', id).select('*').first();

            if (incident.id != id || incident.id === undefined){
                return response.status(error.status).json({error: 'id not found'});
            }

            await connection('admission').where('id', id).update({
                classificationPatient: request.body.classificationPatient,
                careUnit: request.body.careUnit,
                allah: request.body.allah,
                bedroom: request.body.bedroom,
                bed: request.body.bed,
                placeId: request.body.placeId,
                universalId: request.body.universalId,
                universalIdType: request.body.universalIdType,
                building: request.body.building,
                floor: request.body.floor,
                locationDescription: request.body.locationDescription,
                publicPlace: request.body.publicPlace,
                city: request.body.city,
                state: request.body.state,
                country: request.body.country,
                locationType: request.body.locationType,
                AdmissionType: request.body.AdmissionType,
                preAdmissionNumber: request.body.preAdmissionNumber,
                placeIdPatient: request.body.placeIdPatient,
                universalIdPatient: request.body.universalIdPatient,
                universalIdTypePatient: request.body.universalIdType,
                publicPlacePatient: request.body.publicPlacePatient,
                cityPatient: request.body.cityPatient,
                statePatient: request.body.statePatient,
                countryPatient: request.body.countryPatient,
                locationTypePatient: request.body.locationTypePatient,
                admissiontypePatient: request.body.admissiontypePatient,
                preAdmissionNumberPatient: request.body.preAdmissionNumberPatient,
                idDoctor: request.body.idDoctor,
                nameDoctor: request.body.nameDoctor,
                surnameDoctor: request.body.surnameDoctor,
                idRequestingDoctor: request.body.idRequestingDoctor,
                nameRequestingDoctor: request.body.nameRequestingDoctor,
                surnameRequestingDoctor: request.body.surnameRequestingDoctor,
                idDoctorEspecialist: request.body.idDoctorEspecialist,
                nameDoctorEspecialist: request.body.nameDoctorEspecialist,
                surnameDoctorEspecialist: request.body.surnameDoctorEspecialist,
                hospitalUnitDoctorEspecialist: request.body.hospitalUnitDoctorEspecialist,
                admissionsourceDoctorEspecialist: request.body.admissionsourceDoctorEspecialist,
                idDoctorAdmission: request.body.idDoctorAdmission,
                nameDoctorAdmission: request.body.nameDoctorAdmission,
                surnameDoctorAdmission: request.body.surnameDoctorAdmission,
                financingtypeDoctorAdmission: request.body.financingtypeDoctorAdmission,
                admissionDateTimedoctorAdmission: request.body.admissionDateTimedoctorAdmission,
            })

            return response.status(200).json({mensager: 'Data updated successfully'});
        }catch(error){
            console.log(error);
            next(error);
        }
    }
}