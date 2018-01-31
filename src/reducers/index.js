import { combineReducers } from 'redux';
import PointsListReducer from './points_reducer';

const rootReducer = combineReducers({
  pointsList: PointsListReducer
});

export default rootReducer;
