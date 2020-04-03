
exports.up = function(knex) {
  return knex.schema.createTable('breath', function(table){
    table.increments('id');
    table.string('history').notNullable();
    table.string('presence').notNullable();
    table.string('frequency').notNullable();
    table.string('regularity').notNullable();
    table.string('depth').notNullable();
    table.string('clinicalDescription').notNullable();
    table.string('clinicalInterpretation').notNullable();
    table.string('comment').notNullable();
    table.string('bodyPosition').notNullable();
    table.string('confoundingFactors').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('breath');
};
