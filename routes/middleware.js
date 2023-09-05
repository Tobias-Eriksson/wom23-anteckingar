const express = require('express')
const router = express.Router()

const myMiddleware = (req, res, next) => {
    console.log("Hello middleware")
    res.namn = "Googoo"
    next()
}

router.get("/", myMiddleware, (req, res) => {
    res.send(`Middleware in console? ${res.namn}`)
})

module.exports = router
