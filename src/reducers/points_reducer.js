import {ADD_NEW_POINT} from '../actions/index';

export default function (state = [], action) {
  if (action.type === ADD_NEW_POINT) {
    return [action.payload, ...state];
  }

  return state;
}
