const express = require("express")
const app = express()
const PORT = 3030
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Toimii")
})

const helloRouter = require('./routes/hello')
app.use('/hello', helloRouter)

const notesRouter = require('./routes/notes')
app.use('/notes', notesRouter)

const middlewareRouter = require('./routes/middleware')
app.use('/middlewaretest', middlewareRouter)

// Krävs för att ta emot JSON i request body

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})