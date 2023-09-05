const express = require('express')
const router = express.Router()

console.log("Notes")

router.get('/', (req, res) => {
    console.log("Notes GET")
    res.send("Notes B)")
})

router.post('/', (req, res) => {
    res.send(req.body)
})

router.patch('/:id', (req, res) => {
    res.send({
        msg: 'patch',
        id: req.body.id,
        reqBody: req.body
    })
})

router.delete('/:id', (req, res) => {
    res.send({
        msg: 'delete',
        id: req.params.id,
    })
})

module.exports = router


