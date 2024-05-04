// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const middleware = require('./middleware')
const methods = require('./model')

router.get('/', async (req, res) => {
    const data = await methods.getTask()
    try {
        res.status(200).json(data)
    } catch {
        res.status(500).json({message: 'internal server error, please try again'})
    }
})

router.post('/', middleware.checkTask, middleware.checkProject, async (req, res) => {
    const data = await methods.postTask(req.body)
    try {
        res.status(200).json(data)
    } catch {
        res.status(500).json({message: 'internal server error, please try again'})
    }
})
module.exports = router