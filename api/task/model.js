// build your `Task` model here
const db = require('../../data/dbConfig')
async function getTask() {
    const data = await db('tasks as t').join('projects as p', 't.project_id', '=', 'p.project_id')
    .select('p.project_name', 'p.project_description', 't.task_notes', 't.task_description', 't.task_completed')
    const result = data.reduce((curr, col) => {
        if (col.project_name) {
            if (col.task_completed === 1) {
                col.task_completed = true
            } else {
                col.task_completed = false
            }
            curr.push(col)
            return curr
        }
    }, [])
    return result
}

async function postTask (task) {
    const id = await db('tasks').insert(task)
    const final = await db('tasks').where('task_id', id).first()
    final.task_completed = final.task_completed === 1 ? true : false
    return final
}

module.exports = {
    getTask,
    postTask
}