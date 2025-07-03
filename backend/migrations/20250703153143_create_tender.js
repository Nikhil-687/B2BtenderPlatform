export async function up(knex) {
    return knex.schema.createTable('tenders', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.decimal('budget', 15, 2).notNullable();
      table.date('deadline').notNullable();
      table.enum('status', ['open', 'in_progress', 'completed']).defaultTo('open');
      table.string('contact_email').notNullable();
  
      table.integer('created_by');      // company.id who raised it
      table.integer('winning_company'); // company.id whose proposal was accepted
  
      table.string('proof_url'); // optional
  
      table.timestamps(true, true);
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('tenders');
  }
  