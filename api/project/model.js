// build your `Project` model here
const db = require('../../data/dbConfig')
async function getProjects() {
    const data = await db('projects')
    const finish = data.reduce((curr, col) => {
        if (col.project_name) {
            if (col.project_completed === 1) {
                col.project_completed = true
            } else {
                col.project_completed = false
            }
            curr.push(col)
        }
        return curr
    }, [])
    return finish
}

async function postProject (project) {
    const id = await db('projects').insert(project)
    const final = await db('projects').where('project_id', id).first()
    final.project_completed = final.project_completed === 1 ? true : false
    return final
}

module.exports = {
    getProjects,
    postProject
}