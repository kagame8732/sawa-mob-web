import actionTypes from "../actions/types";

const initialState = {
  locations: [
    { id: 1, name: "Kigali" },
    { id: 2, name: "Rubavu" },
    { id: 3, name: "Muhanga" },
    { id: 4, name: "Musanze" },
  ],
  errors: null,
  selectedLocation: { id: 1, name: "Kigali" },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setLocation:
      return {
        ...state,
        selectedLocation: action.payload,
      };

    default:
      return state;
  }
};
