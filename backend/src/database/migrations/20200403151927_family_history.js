
exports.up = function(knex) {
  return knex.schema.createTable('family_history', function(table){
      table.increments('id');
      table.string('relationship').notNullable();
      table.string('dateOFBirth').notNullable();
      table.string('deceased').notNullable();
      table.string('ageAtDeath').notNullable();
      table.string('ageMeasureDeath').notNullable();
      table.string('deathDate').notNullable();
      table.string('ProblemDiagno').notNullable();
      table.string('clinicalDescription').notNullable();
      table.string('problemDetectionAge').notNullable();
      table.string('ageMeasurement').notNullable();
      table.string('causeOfDeath').notNullable();
      table.string('causeOfDeathDescription').notNullable();
      table.string('comment').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('family_history');
};
