import actionTypes from './action-types';

const initialState = {
  currentStep: 0,
  sprint: {},
  sprintLoading: false,

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
      const activeStory = action.sprint.stories.find(
        (story) => story.status === 'Active'
      );
      return {
        ...state,
        sprint: action.sprint,
        sprintLoading: false,
        activeStory: activeStory,
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
        currentStep: 1,
      };
    case actionTypes.CREATE_ESTIMATION:
      return { ...state, estimationCreating: true };
    case actionTypes.ESTIMATION_CREATED:
      return {
        ...state,
        estimationCreating: false,
        activeStoryVoted: true,
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
        ...(state.activeStory._id !== action.story._id && {
          activeStory: { ...action.story },
          activeStoryVoted: false,
        }),
      };

    case actionTypes.CAPTURE_ESTIMATION_UPDATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
