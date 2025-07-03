/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.string('post');
        table.decimal('investment_limit', 15, 2).defaultTo(0);
        
        // NEW: list of companies the user belongs to
        table.jsonb('companies').defaultTo('[]');
        // Example value: [{ "companyId": 1, "isOwner": true }, { "companyId": 2, "isOwner": false }]
        
        table.timestamps(true, true);
      });
      
      
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    await knex.schema.dropTable('users');
  }
  