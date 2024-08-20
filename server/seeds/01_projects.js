export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("projects").del();
  await knex("projects").insert([
    {
      id: 1,
      project_name: "SAMPLE PROJECT",
      project_type: "Personal",
      project_status: "Ongoing",
    },
    {
      id: 2,
      project_name: "MOTIONAL MODE STRUCTURE SIMULATION",
      project_type: "Academic Research",
      project_status: "Completed",
    },
  ]);
}
