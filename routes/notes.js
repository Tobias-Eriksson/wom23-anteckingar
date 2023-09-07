const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


console.log("Notes")

//READALL

router.get('/', async (req, res) => {
    try {
        const note = await prisma.notes.findMany()
        res.send({ msg: 'get', reqBody: note })
    } catch (err) {
        res.send({ msg: 'ERROR', error: err })
    }
})

//READ
router.get('/:id', async (req, res) => {
    try {
        const note = await prisma.notes.findUnique({
            where: {
                id: req.params.id,
            },
        })
        res.send({ msg: 'get', reqBody: note })
    } catch (err) {
        res.send({ msg: 'ERROR', error: err })
    }
})

//UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const note = await prisma.notes.update({
            where: {
                id: req.params.id,
            },
            data: {
                noteText: req.body.text,
            },
        })
        res.send({ msg: 'patch', reqBody: req.body })
    } catch (err) {
        res.send({ msg: 'ERROR', error: err })
    }
})

//DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await prisma.notes.delete({
            where: {
                id: req.params.id,
            },
        })
        res.send({
            msg: 'delete',
            id: req.params.id,
        })
    } catch (err) {
        res.send({ msg: 'ERROR', error: err })
    }

})

//CREATE
router.post('/', async (req, res) => {
    try {
        const note = await prisma.notes.create({
            data: {
                noteText: req.body.text,
            },
        })
        res.send({ msg: 'post', reqBody: req.body })
    } catch (err) {
        res.send({ msg: 'ERROR', error: err })
    }

})

module.exports = router


