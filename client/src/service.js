import { put, call, takeEvery } from 'redux-saga/effects';
import { safeSaga } from './helpers/index.js';
import { message } from 'antd';
import {
  sprintsLoaded,
  sprintLoaded,
  sprintCreated,
  estimationCreated,
  storyVotingFinished,
} from './actions';
import actionTypes from './action-types';
import { Sprint, Estimation } from './models';
import store from './store';

export function* createSprint(action) {
  const sprintInstance = new Sprint(action.sprint);
  const res = yield call(() =>
    sprintInstance
      .save({ model: sprintInstance })
      .then((response) => {
        action.callback('sprints');
        return response;
      })
      .catch((err) => {
        console.error(err);
        message.error(err.response.detail);
      })
  );
  yield put(sprintCreated(res && res.response));
}

export function* createEstimation(action) {
  const { sprint } = store.getState().rootReducer;
  const activeStory = sprint.stories.find((story) => story.status === 'Active');
  const estimationInstance = new Estimation({
    value: action.value,
    story: activeStory._id,
    sprintId: activeStory.sprint,
  });
  const res = yield call(() =>
    estimationInstance
      .save({ model: estimationInstance })
      .then((response) => response)
      .catch((err) => {
        console.error(err);
        message.error(err.response.detail);
      })
  );
  yield put(estimationCreated(res && res.response, action.value));
}

export function* finishStoryVoting(action) {
  const { sprint } = store.getState().rootReducer;
  const sprintInstance = new Sprint({
    ...sprint,
    finalEstimation: action.finalValue,
  });

  const res = yield call(() =>
    sprintInstance
      .save({ model: sprintInstance, path: 'finishStoryVoting' })
      .then((response) => response)
      .catch((err) => {
        console.error(err);
        message.error(err.response.detail);
      })
  );
  yield put(storyVotingFinished(res && res.response));
}

export function* loadSprint(action) {
  const res = yield call(() =>
    Sprint.get({ id: action.id })
      .then((response) => response)
      .catch((err) => {
        console.error(err.response);
        message.error(err.response.message);
      })
  );
  yield put(sprintLoaded(res && res.response));
}

export function* loadSprints(action) {
  const res = yield call(() =>
    Sprint.all()
      .then((response) => response)
      .catch((err) => {
        console.error(err);
        message.error(err.response.detail);
      })
  );
  yield put(sprintsLoaded(res.response));
}

export default function* createSprintSaga() {
  yield takeEvery(actionTypes.LOAD_SPRINT, safeSaga(loadSprint));
  yield takeEvery(actionTypes.CREATE_SPRINT, safeSaga(createSprint));
  yield takeEvery(actionTypes.CREATE_ESTIMATION, safeSaga(createEstimation));
  yield takeEvery(actionTypes.FINISH_STORY_VOTING, safeSaga(finishStoryVoting));
  yield takeEvery(actionTypes.LOAD_SPRINTS, safeSaga(loadSprints));
}
