export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("projectDetails").del();
  await knex("projectDetails").insert([
    {
      project_id: 1,
      goal: "Sample long-term goal",
      wins: "Celbrate yourself! Every time you have a win associated with this project or a positive piece of feedback, paste it here for safe-keeping to remind yourself you're doing great.",
      metrics: "Hard numbers that measure your success",
      post_mortem:
        "Add reminders of key events in STAR format in preparation to speak to this project in inteviews.",
      tools: "Technology stack. Tools. Add these to your resume afterward",
      to_do: 1,
    },
    {
      project_id: 2,
      goal: "Build a qudit ion-trap based quantum platform with Ba isotopes",
      wins: "Selectively loaded Ba isotopes.",
      metrics:
        "Icreased the reliability of isotope selective loading from 20% to 90+%",
      post_mortem: "N/A",
      tools: "IONControl, Optics, Python",
      to_do: 2,
    },
  ]);
}
