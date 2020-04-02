
exports.up = function(knex) {
  return knex.schema.createTable('exam', function(table){
      table.string('id').primary()
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
