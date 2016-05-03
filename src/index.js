import {graphql} from 'graphql';
import {getTypes} from './type';
import {getSchema} from './schema';
import {getModels} from './model';
import {processId} from './query';

function _getTypes(mongooseModels) {
  const graffitiModels = getModels(mongooseModels);
  return getTypes(graffitiModels);
}

export default {
  graphql,
  getSchema,
  getTypes: _getTypes,
  processId
};

export {
  graphql,
  getSchema,
  _getTypes as getTypes,
  processId
};
