exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table.boolean("complete").defaultTo(0);
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table.boolean("complete").defaultTo(0);
    table.integer("project_id").notNull().references("id").inTable("projects");
  });

  await knex.schema.createTable("projects_resources", (table) => {
    table.integer("project_id").notNull().references("id").inTable("projects");
    table
      .integer("resource_id")
      .notNull()
      .references("id")
      .inTable("resources");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
