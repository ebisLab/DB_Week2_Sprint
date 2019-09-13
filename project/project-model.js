const db = require('../data/dbConfig.js')


module.exports = {
    findProject,
    findResource,
    findTask,
    findResourceById,
    findProjectById,
    addResource
}

function findProject() {
    return db('resources')
        .then(post => {
            return post
        })
}

function findProjectById(id) {
    return db('project')
        .where({ id })
        .first()
}

function findTask(id) {
    return db('project as p')
        .join('task as t', 't.project_id', 'p.id')
        .select('t.description', 't.notes', 't.completed')
        .where('t.project_id', id)
}

function findResource(id) {
    return db('projects as p')
        .join('project-resources as pr', 'pr.project_id', 'p.id')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .select('r.description', 'r.name', 't.description')
        .where('pr.project_id', id)

}

function findResourceById(id) {
    return db('resources')
        .where({ id })
        .first()
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
        .then(([resourceId]) => findById(resourceId))
}


