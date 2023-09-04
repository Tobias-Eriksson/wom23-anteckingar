const express = require("express")
const app = express()
const PORT = 3030

app.get("/", (req, res) => {
    res.send("Toimii")
})

app.get("/hello/:namn", (req, res) => {
    res.send(`Hello ${req.params.namn}`)
    // Params t.ex. /hello/tobias
    console.log(req.params)
    // Query t.ex. /hello/tobias?foo=bar
    console.log(req.query)
})

console.log("Erik ei ummarra!")


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})