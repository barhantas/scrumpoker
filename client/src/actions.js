import actionTypes from './action-types';

export const loadSprint = (id) => {
  return { type: actionTypes.LOAD_SPRINT, id };
};

export const sprintLoaded = (sprint = {}) => {
  return { type: actionTypes.SPRINT_LOADED, sprint };
};

export const createSprint = (sprint, callback) => {
  return { type: actionTypes.CREATE_SPRINT, sprint, callback };
};

export const sprintCreated = (sprint) => {
  return { type: actionTypes.SPRINT_CREATED, sprint };
};

export const createEstimation = (value) => {
  return { type: actionTypes.CREATE_ESTIMATION, value };
};

export const estimationCreated = () => {
  return { type: actionTypes.ESTIMATION_CREATED };
};

export const finishStoryVoting = (finalValue) => {
  return { type: actionTypes.FINISH_STORY_VOTING, finalValue };
};

export const storyVotingFinished = () => {
  return { type: actionTypes.STORY_VOTING_FINISHED };
};

export const captureStoryUpdate = (story) => {
  return { type: actionTypes.CAPTURE_STORY_UPDATE, story };
};

export const captureEstimationUpdate = (estimation) => {
  return { type: actionTypes.CAPTURE_ESTIMATION_UPDATE, estimation };
};

export const loadSprints = () => {
  return { type: actionTypes.LOAD_SPRINTS };
};

export const sprintsLoaded = (sprints) => {
  return { type: actionTypes.SPRINTS_LOADED, sprints };
};
