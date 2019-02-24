import { RestBaseModel } from 'rest-in-model';

class Sprint extends RestBaseModel {
  getConfig() {
    return {
      fields: {
        id: { map: '_id' },
        sessionName: {},
        numberOfVoters: {},
        stories: {},
        finalEstimation: {},
      },
      resultListField: (response) => response, //response.result,
      paths: {
        default: '/api/sprints',
        finishStoryVoting: '/api/finishStoryVoting ',
      },
    };
  }
}

export default Sprint;
