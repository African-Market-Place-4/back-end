const router = require('express').Router()
const Items = require('./items-model')
const { validateItemId, checkItemPayload } = require('./items-middlware')

router.get('/', (req, res, next) => { // eslint-disable-line
    // Items.getAllItems()
    //     .then(items => {
    //         res.json(items)
    //     })
    //     .catch(next)
    res.json('items')
})

router.get('/:id', validateItemId, (req, res, next) => {
    const { id } = req.params
    Items.getItemById(id)
        .then(item => {
            res.json(item)
        })
        .catch(next)
})

router.post('/', checkItemPayload, (req, res, next) => {
    Items.addItem(req.body)
        .then(newItem => {
            res.status(201).json(newItem)
        })
        .catch(next)
})

module.exports = router