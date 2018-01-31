import {ADD_NEW_POINT} from '../actions/index';
import {CLEAR_POINTS} from '../actions/index';
import {REMOVE_POINT} from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_NEW_POINT:
      return {...state, [action.payload.id]: action.payload};
    case CLEAR_POINTS:
      return {};
    case REMOVE_POINT:
      const newState = {...state};
      const pointId = action.payload;
      delete newState[pointId];
      return newState;
  }

  return state;
}
