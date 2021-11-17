
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          name: "Beans Rosecoco",
          price_usd: 6.5,
          description: "2 lbs per bag",
          seller: 1,

        },
        {
          name: "Milk",
          price_usd: 4.99,
          description: "500 ml per bottle",
          seller: 2,
        },
        {
          name: "Limes",
          price_usd: 5.99,
          description: "2 Limes per purchase",
          seller: 2,

        }
      ]);
    });
};

