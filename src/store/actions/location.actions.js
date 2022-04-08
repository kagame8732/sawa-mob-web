import actionTypes from "./types";

export const onChangeLocation = (location) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.setLocation, payload: location });
  };
};
