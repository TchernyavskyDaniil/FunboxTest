export const ADD_NEW_POINT = 'ADD_NEW_POINT';
export const CLEAR_POINTS = 'CLEAR_POINTS';
export const REMOVE_POINT = 'REMOVE_POINT';

export function addNewPoint (point) {
  return {
    type: ADD_NEW_POINT,
    payload: point
  };
}

export function clearPoints () {
  return {
    type: CLEAR_POINTS
  };
}

export function removePoint (pointId) {
  return {
    type: REMOVE_POINT,
    payload: pointId
  };
}
