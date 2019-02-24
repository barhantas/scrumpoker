import { RestBaseModel } from 'rest-in-model';

class Estimation extends RestBaseModel {
  getConfig() {
    return {
      fields: {
        id: { map: '_id' },
        value: {},
        story: {},
      },
      resultListField: (response) => response, //response.result,
      paths: {
        default: '/api/estimations ',
      },
    };
  }
}

export default Estimation;
