
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          item_name: 'Eggs',
          item_description: 'Animal Product',
          item_price: '1.00',
          item_country: 'USA'

        },
        {
          item_name: 'Potatoes',
          item_description: 'Vegetable',
          item_price: '.50',
          item_country: 'USA'

        },
        {
          item_name: 'Avacado',
          item_description: 'Fruit',
          item_price: '3.00',
          item_country: 'USA'

        }
      ]);
    });
};
