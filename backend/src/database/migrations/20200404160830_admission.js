
exports.up = function(knex) {
    return knex.schema.createTable('admission', function(table){
        table.increments('id');
        table.string('classificationPatient').notNullable();
        table.string('careUnit').notNullable();
        table.string('allah').notNullable();
        table.string('bedroom').notNullable();
        table.string('bed').notNullable();
        table.string('placeId').notNullable();
        table.string('universalId').notNullable();
        table.string('universalIdType').notNullable();
        table.string('building').notNullable();
        table.string('floor').notNullable();
        table.string('locationDescription').notNullable();
        table.string('publicPlace').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('country').notNullable();
        table.string('locationType').notNullable();
        table.string('AdmissionType').notNullable();
        table.string('preAdmissionNumber').notNullable();
        table.string('placeIdPatient').notNullable();
        table.string('universalIdPatient').notNullable();
        table.string('universalIdTypePatient').notNullable();
        table.string('publicPlacePatient').notNullable();
        table.string('cityPatient').notNullable();
        table.string('statePatient').notNullable();
        table.string('countryPatient').notNullable();
        table.string('locationTypePatient').notNullable();
        table.string('admissiontypePatient').notNullable();
        table.string('preAdmissionNumberPatient').notNullable();
        table.string('idDoctor').notNullable();
        table.string('nameDoctor').notNullable();
        table.string('surnameDoctor').notNullable();
        table.string('idRequestingDoctor').notNullable();
        table.string('nameRequestingDoctor').notNullable();
        table.string('surnameRequestingDoctor').notNullable();
        table.string('idDoctorEspecialist').notNullable();
        table.string('nameDoctorEspecialist').notNullable();
        table.string('surnameDoctorEspecialist').notNullable();
        table.string('hospitalUnitDoctorEspecialist').notNullable();
        table.string('admissionsourceDoctorEspecialist').notNullable();
        table.string('idDoctorAdmission').notNullable();
        table.string('nameDoctorAdmission').notNullable();
        table.string('surnameDoctorAdmission').notNullable();
        table.string('financingtypeDoctorAdmission').notNullable();
        table.string('admissionDateTimedoctorAdmission').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('admission');
  
};
