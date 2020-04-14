
exports.up = function(knex) {
  return knex.schema.createTable('exam', function(table){
      table.increments('id');
      table.string('systeOrEstru').notNullable();
      table.string('bodyLocation').notNullable();
      table.string('noAbnormality').notNullable();
      table.string('clinicalDescription').notNullable();
      table.string('clinicalInterpretation').notNullable();
      table.string('comment');

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exam');
};
