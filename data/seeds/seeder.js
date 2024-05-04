/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const projectA = { project_name: 'Web API', project_description: 'Build APIs', project_completed: true }
  const projectB = { project_name: 'Databases', project_description: 'Learn SQL', project_completed: false }
  const projectC = { project_name: 'Authentication', project_description: 'Learn SQL', project_completed: true}
  const resourceA = { resource_name: 'keyboard' }
  const resourceB = { resource_name: 'computer', resource_description: 'Windows PC' }
  const taskA = { task_description: 'Do foo', project_id: 1 }
  const taskB = { task_description: 'Do bar', task_notes: 'Use Postman!',  task_completed: 1, project_id: 1 }
  const taskC = { task_description: 'Do baz', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }

  await knex('projects').insert(projectA)
  await knex('projects').insert(projectB)
  await knex('projects').insert(projectC)
  await knex('resources').insert(resourceA)
  await knex('resources').insert(resourceB)
  await knex('tasks').insert(taskA)
  await knex('tasks').insert(taskB)
  await knex('tasks').insert(taskC)
};
