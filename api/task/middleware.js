const db = require('../../data/dbConfig')

async function checkTask (req, res, next) {
    const { task_description, project_id } = req.body
    if (task_description !== undefined && project_id !== undefined) {
        next()
    } else {
        res.status(422).json({message: 'tasks need to have a description and project id'})
    }
}

async function checkProject (req, res, next) {
    const { project_id } = req.body
    const result = await db('projects').where('project_id', project_id)
    if (result.length === 1) {
        next()
    } else {
        res.status(422).json({message: 'tasks need to have a valid project'})
    }
}
module.exports = {
    checkTask,
    checkProject
}