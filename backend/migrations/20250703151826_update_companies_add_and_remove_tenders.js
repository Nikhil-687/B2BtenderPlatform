export async function up(knex) {
    return knex.schema.alterTable('companies', (table) => {
      // Add new JSONB columns
      table.jsonb('applicationTenders').defaultTo('[]');
      table.jsonb('raisedPrevTenders').defaultTo('[]');
      table.jsonb('workedPrevTenders').defaultTo('[]');
  
      // Drop the old single-field prevTenders
      table.dropColumn('prevTenders');
    });
  }
  
  export async function down(knex) {
    return knex.schema.alterTable('companies', (table) => {
      // Revert: re-add the old column
      table.jsonb('prevTenders').defaultTo('[]');
  
      // Remove newly added fields
      table.dropColumn('applicationTenders');
      table.dropColumn('raisedPrevTenders');
      table.dropColumn('workedPrevTenders');
    });
  }
  