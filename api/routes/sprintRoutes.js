module.exports = app => {
  const sprint = require("../controllers/sprintController");

  app
    .route("/api/sprints")
    .get(sprint.listAllSprints)
    .post(sprint.createSprint);

  app.route("/api/finishStoryVoting").post(sprint.finishStoryVoting);
  app.route("/api/estimations").post(sprint.createEstimation);

  app
    .route("/api/sprints/:sprintId")
    .get(sprint.getSprint)
    .put(sprint.updateSprint)
    .delete(sprint.deleteSprint);
};
