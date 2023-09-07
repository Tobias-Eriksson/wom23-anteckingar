const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


console.log("Notes")

//READ
router.get('/:id', async (req, res) => {
    const note = await prisma.notes.findUnique({
        where: {
            id: req.params.id,
        },

    })
    res.send({ msg: 'get', reqBody: note })
})

//UPDATE
router.patch('/:id', async (req, res) => {
    const note = await prisma.notes.update({
        where: {
            id: req.params.id,
        },
        data: {
            noteText: req.body.text,
        },
    })
    res.send({ msg: 'patch', reqBody: req.body })
})

//DELETE
router.delete('/:id', async (req, res) => {
    const deleteId = await prisma.notes.delete({
        where: {
            id: req.params.id,
        },
    })
    res.send({
        msg: 'delete',
        id: req.params.id,
    })
})

//CREATE
router.post('/', async (req, res) => {
    const note = await prisma.notes.create({
        data: {
            noteText: req.body.text,
        },
    })
    res.send({ msg: 'post', reqBody: req.body })
})

module.exports = router


