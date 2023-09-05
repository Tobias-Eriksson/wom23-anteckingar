const express = require('express')
const router = express.Router()

router.get("/:namn", (req, res) => {
    res.send(`Hello ${req.params.namn}`)
    // Params t.ex. /hello/tobias
    console.log(req.params)
    // Query t.ex. /hello/tobias?foo=bar
    console.log(req.query)
})

module.exports = router
