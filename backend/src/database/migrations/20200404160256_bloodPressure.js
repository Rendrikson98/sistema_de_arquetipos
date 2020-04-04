
exports.up = function(knex) {
    return knex.schema.createTable('bloodPressure', function(table){
        table.increments('id');
        table.string('historic').notNullable();
        table.string('systotic').notNullable();
        table.string('diastotic').notNullable();
        table.string('bloodPressure').notNullable();
        table.string('pulsePressure').notNullable();
        table.string('clinicalInterpretation').notNullable();
        table.string('commentary').notNullable();
        table.string('position').notNullable();
        table.string('sleepStatus').notNullable();
        table.string('factors').notNullable();
        table.string('tilted').notNullable();
        table.string('clamp').notNullable();
        table.string('measurementLocation').notNullable();
        table.string('method').notNullable();
        table.string('systoticForm').notNullable();
        table.string('finalDiastole').notNullable();
        table.string('bloodPressuerForm').notNullable();
        table.string('diastoliPressure').notNullable();
    });

};

exports.down = function(knex) {
    return knex.schema.dropTable('bloodPressure');
};
