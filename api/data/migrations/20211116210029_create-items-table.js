exports.up = async function(knex) {
  await knex.schema
    .createTable('items', (items) => {
        items.increments('item_id')
        items.string('item_name', 50).notNullable()
        items.string('item_description', 180).notNullable()
        items.float('item_price').notNullable()
        items.string('item_country').notNullable()
    })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('items')
}
