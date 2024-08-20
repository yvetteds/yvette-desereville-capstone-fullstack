export const up = function (knex) {
  return knex.schema
    .createTable("projects", (table) => {
      table.increments("id").primary();
      table.string("project_name").notNullable();
      table.string("project_type").notNullable();
      table.string("project_status").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("projectDetails", (table) => {
      table
        .integer("project_id")
        .primary()
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("goal").notNullable();
      table.text("wins").notNullable();
      table.text("metrics").notNullable();
      table.text("post_mortem").notNullable();
      table.text("tools").notNullable();
      table.integer("to_do").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("to_do", (table) => {
      table.increments("id").primary();
      table
        .integer("project_id")
        .unsigned()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("description").notNullable();
      table.text("status").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

export const down = function (knex) {
  return knex.schema
    .dropTable("to_do")
    .dropTable("projectDetails")
    .dropTable("projects");
};
