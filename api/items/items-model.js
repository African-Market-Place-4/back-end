const db = require('../data/db-config')

const  getAllItems = () => {
    return db('products')
}

const getItemById = (product_id) => {
    return db('products').where('product_id', product_id).first()
}

const addItem = (item) => {
    return db('products').insert(item, ['name', 'price_usd', 'description', 'seller'])
}

module.exports = {
    getAllItems,
    getItemById,
    addItem
}