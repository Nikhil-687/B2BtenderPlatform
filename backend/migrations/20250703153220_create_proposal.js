export async function up(knex) {
    return knex.schema.createTable('proposals', (table) => {
      table.increments('id').primary();
      table.integer('tender_id').notNullable();
      table.integer('company_id').notNullable();
      table.text('description').notNullable();
      table.decimal('budget', 15, 2).notNullable();
      table.string('proof_url');
      table.enum('status', ['pending', 'accepted', 'rejected']).defaultTo('pending');
      table.timestamp('submitted_at').defaultTo(knex.fn.now());
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('proposals');
  }
  