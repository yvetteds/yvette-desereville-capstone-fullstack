export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("to_do").del();
  await knex("to_do").insert([
    {
      description: "Documentation",
      id: "1",
      status: "open",
      project_id: 1,
    },
    {
      description: "Documentation",
      id: "2",
      status: "done",
      project_id: 1,
    },
    {
      description: "Motional Mode Structure Calculations",
      id: "3",
      status: "done",
      project_id: 2,
    },
  ]);
}
