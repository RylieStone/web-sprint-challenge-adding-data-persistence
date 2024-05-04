const db = require('../../data/dbConfig')

async function checkName (req, res, next) {
    const { project_name } = req.body
    if (project_name !== undefined) {
        next()
    } else {
        res.status(422).json({message: 'project needs to have a name'})
    }
}


module.exports = {
    checkName
}