import actionTypes from "../actions/types";

const initialState = {
  products: [
    {
      id: 1,
      name: "8mm SteelRwa",
      unit_quantity: 4.8,
      unit_price: 5550,
      price: 5550,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 2,
      name: "10mm SteelRwa",
      unit_quantity: 7.4,
      unit_price: 8250,
      price: 8250,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 3,
      name: "12mm SteelRwa",
      unit_quantity: 10.6,
      unit_price: 11740,
      price: 11740,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 4,
      name: "14mm SteelRwa",
      unit_quantity: 15.6,
      unit_price: 16880,
      price: 16880,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 5,
      name: "16mm SteelRwa",
      unit_quantity: 18.9,
      unit_price: 21980,
      price: 21980,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 6,
      name: "20mm SteelRwa",
      unit_quantity: 29.4,
      unit_price: 34270,
      price: 34270,
      unit_number: 1,
      unit_max: 10,
    },
    {
      id: 7,
      name: "25mm SteelRwa",
      unit_quantity: 45.5,
      unit_price: 53130,
      price: 53130,
      unit_number: 1,
      unit_max: 10,
    },
  ],
  isFetching: false,
  errors: null,
  selectedProduct: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.getCategories:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.getProductsSuccess:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };

    case actionTypes.getProductsFail:
      return {
        ...state,
        errors: action.payload,
        isFetching: false,
      };
    case actionTypes.setSelectedProduct:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};
