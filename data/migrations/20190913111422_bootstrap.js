
exports.up = function (knex) {
    return knex.schema.createTable('project', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description').notNullable();
        tbl.boolean('completed').notNullable().defaultTo(false);
    })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes').notNullable();
            tbl.boolean('completed').notNullable().defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .references('id')
                .inTable('project')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('resources', tbl => {
            tbl.increments()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')


            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl.string('name').notNullable();
            tbl.string('description').notNullable();
            tbl.unique(['project_id', 'resource_id', 'name', 'description'])

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('task')
        .dropTableIfExists('project')
};
