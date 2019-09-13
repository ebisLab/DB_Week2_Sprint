
exports.up = function (knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
        tbl.string('completed').notNullable();
    })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes').notNullable();
            tbl.string('completed').notNullable();
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')

            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('task')

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('task')
        .dropTableIfExists('project')
};
