const Items = require('./items-model')

const validateItemId = async (req, res, next) => {
       const { id } = req.params
       const item = await Items.getItemById(id)
       if (!item) {
           req.status(404).json({ message: "Item not found"})
       } else {
           next()
       }
}

const checkItemPayload = async (req, res, next) => {
    const { 
        item_name,
        item_description,
        item_price,
        item_country,
    } = req.body
    if (!item_name || !item_description || !item_price || !item_country) {
        res.status(401).json({ message: "All fields are required"})
    } else {
        next()
    }
}

module.exports = {
    validateItemId,
    checkItemPayload
}