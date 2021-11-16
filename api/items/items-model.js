const db = require('../data/db-config')

const  getAllItems = () => {
    return db('items')
}

const getItemById = (id) => {
    return db('items').where('item_id', id).first()
}

const addItem = (item) => {
    return db('items').insert(item, ['item_name', 'item_description', 'item_price', 'item_country'])
}

module.exports = {
    getAllItems,
    getItemById,
    addItem
}