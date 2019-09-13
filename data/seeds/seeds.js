
exports.seed = function (knex) {
  // Truncates ALL existing entries
  return knex('project').truncate()
    .then(() => knex('task').truncate())
    .then(() => knex('resources').truncate())

    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        { id: 1, name: 'Go to sleep', description: 'Something about sleep here', completed: 'false' },
        { id: 2, name: 'Finish Sprint', description: 'Something about doing the sprint', completed: 'true' },
        { id: 3, name: 'Get some excercise', description: 'Something about exercise here', completed: 'true' }
      ]);
    })
    .then(() => {
      return knex('task').insert([
        { id: 1, description: 'Record Sleep Apnea', notes: 'Something about sleep here', completed: 'true' },
        { id: 2, description: 'Clean Sheet', notes: 'Something about doing the sprint', completed: 'true' },
        { id: 3, description: 'Turn on diffuser', notes: 'Something about exercise here', completed: 'false' }
      ])
    })
    .then(() => {
      return knex('resources').insert([
        { project_id: 1, task_id: 1, name: 'Sleep School', description: 'Something about sleep here' },
        { project_id: 2, task_id: 2, name: 'Sleep blog', description: 'Something about doing the sprint' },
        { project_id: 3, task_id: 3, name: 'Help', description: 'Something about exercise here' }
      ])
    });
};
