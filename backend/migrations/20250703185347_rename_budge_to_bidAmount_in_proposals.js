export async function up(knex) {
    return knex.schema.alterTable('proposals', (table) => {
      table.renameColumn('budget', 'bidAmount');
    });
  }
  
  export async function down(knex) {
    return knex.schema.alterTable('proposals', (table) => {
      table.renameColumn('bidAmount', 'budget');
    });
  }
  