// build your `Resource` model here
const db = require('../../data/dbConfig')
async function getResource() {
    const data = await db('resources')
    console.log(data, 'ran')
    return data
}

async function postResource (resource) {
    const id = await db('resources').insert(resource)
    const final = await db('resources').where('resource_id', id).first()
    return final
}

module.exports = {
    getResource,
    postResource
}