exports.up = async function(knex) {
  
    await knex.schema.createTable("products", (products) => {
      products.increments("product_id");
      products.string("name", 200).notNullable();
      products.float("price_usd", 200).notNullable();
      products.string("description", 200).notNullable();
      products
        .integer("seller")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      })
  }
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('products')
  }
  