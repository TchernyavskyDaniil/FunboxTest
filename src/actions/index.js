export const ADD_NEW_POINT = 'ADD_NEW_POINT';

export function addNewPoint (point) {
  return {
    type: ADD_NEW_POINT,
    payload: point
  };
}
