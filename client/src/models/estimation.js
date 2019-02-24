import { RestBaseModel } from 'rest-in-model';

class Estimation extends RestBaseModel {
  getConfig() {
    return {
      fields: {
        id: { map: '_id' },
        value: {},
        story: {},
        sprintId: {},
      },
      resultListField: (response) => response,
      paths: {
        default: '/api/estimations',
      },
    };
  }
}

export default Estimation;
