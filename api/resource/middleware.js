const db = require('../../data/dbConfig')

async function checkName (req, res, next) {
    const { resource_name } = req.body
    const result = await db('resources').where('resource_name', resource_name)
    if (result.length === 0) {
        next()
    } else {
        res.status(422).json({message: 'resource needs to have a unique name'})
    }
}


module.exports = {
    checkName
}