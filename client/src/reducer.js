import actionTypes from './action-types';

const initialState = {
  sprint: {},
  sprintLoading: false,

  isScrumMaster: undefined,
  scrumMasterEstimation: undefined,

  allSprints: [],
  sprintsLoading: false,

  sprintCreating: false,
  estimationCreating: false,
  storyVotingFinishing: false,
  activeStoryVoted: false,
  activeStoryId: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SPRINT:
      return { ...state, sprintLoading: true };
    case actionTypes.SPRINT_LOADED:
      const activeStory =
        action.sprint.stories.find((story) => story.status === 'Active') || {};
      return {
        ...state,
        sprint: action.sprint,
        sprintLoading: false,
        activeStoryId: activeStory._id,
      };
    case actionTypes.LOAD_SPRINTS:
      return { ...state, sprintsLoading: true };
    case actionTypes.SPRINTS_LOADED:
      return {
        ...state,
        allSprints: action.sprints,
        sprintsLoading: false,
      };
    case actionTypes.CREATE_SPRINT:
      return { ...state, sprintCreating: true };
    case actionTypes.SPRINT_CREATED:
      return {
        ...state,
        sprint: action.sprint,
        sprintCreating: false,
        isScrumMaster: true,
      };
    case actionTypes.CREATE_ESTIMATION:
      return { ...state, estimationCreating: true };
    case actionTypes.ESTIMATION_CREATED:
      return {
        ...state,
        estimationCreating: false,
        activeStoryVoted: true,
        scrumMasterEstimation: state.isScrumMaster && action.value,
      };
    case actionTypes.FINISH_STORY_VOTING:
      return { ...state, storyVotingFinishing: true };
    case actionTypes.STORY_VOTING_FINISHED:
      return {
        ...state,
        storyVotingFinishing: false,
        activeStoryVoted: false,
      };

    case actionTypes.CAPTURE_STORY_UPDATE:
      const storyIndex = state.sprint.stories.findIndex(
        (story) => story._id === action.story._id
      );
      state.sprint.stories[storyIndex] = action.story;
      return {
        ...state,
        sprint: {
          ...state.sprint,
          stories: [...state.sprint.stories],
        },
        ...(state.activeStoryId !== action.story._id && {
          activeStoryId: action.story._id,
          activeStoryVoted: false,
        }),
      };
    case actionTypes.I_AM_SCRUM_MASTER:
      return {
        ...state,
        isScrumMaster: true,
      };
    case actionTypes.I_AM_DEVELOPER:
      return {
        ...state,
        isScrumMaster: false,
        scrumMasterEstimation: undefined,
      };
    case actionTypes.CLEAR_STATE:
      return {
        ...initialState,
        allSprints: [...state.allSprints],
      };
    default:
      return state;
  }
};
