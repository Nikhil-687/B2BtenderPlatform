export async function up(knex) {
    await knex.schema.createTable('companies', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable().unique();
        table.string('industry').notNullable();
        table.text('description');
        table.string('logo_url');
        
        table.jsonb('members').defaultTo('[]');        
        table.jsonb('openTenders').defaultTo('[]');      
        table.jsonb('ongoingTenders').defaultTo('[]');   
        table.jsonb('prevTenders').defaultTo('[]');      
      
        table.integer('owner_id'); 
      
        table.timestamps(true, true);
      });
      
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('companies');
  }
  