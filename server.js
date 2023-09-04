const express = require("express")
const app = express()
const PORT = 3030

app.get("/", (req, res) => {
    res.send("Toimii")
})

app.get("/hello/:namn", (req, res) => {
    res.send(`Hello ${req.params.namn}`)
})

console.log("Erik ei ummarra!")

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})