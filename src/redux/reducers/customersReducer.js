import {
  GET_CUSTOMERS_FETCHING,
  GET_CUSTOMERS_FULFILLED,
  GET_CUSTOMERS_REJECTED,
  POST_CUSTOMER_FETCHING,
  POST_CUSTOMER_FULFILLED,
  POST_CUSTOMER_REJECTED,
  PUT_CUSTOMER_FETCHING,
  PUT_CUSTOMER_FULFILLED,
  PUT_CUSTOMER_REJECTED,
  DELETE_CUSTOMER_FETCHING,
  DELETE_CUSTOMER_FULFILLED,
  DELETE_CUSTOMER_REJECTED,
} from "../types/customersTypes";

const initialState = {
  list: [],
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS_FETCHING:
      return {
        ...state,
      };
    case GET_CUSTOMERS_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_CUSTOMERS_REJECTED:
      return {
        ...state,
      };
    case POST_CUSTOMER_FETCHING:
      return {
        ...state,
      };
    case POST_CUSTOMER_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case POST_CUSTOMER_REJECTED:
      return {
        ...state,
      };
    case DELETE_CUSTOMER_FETCHING:
      return {
        ...state,
      };
    case DELETE_CUSTOMER_FULFILLED:
      return {
        ...state,
        list: state.list.filter((customer) => customer._id !== action.payload),
      };
    case DELETE_CUSTOMER_REJECTED:
      return {
        ...state,
      };
    case PUT_CUSTOMER_FETCHING:
      return {
        ...state,
      };
    case PUT_CUSTOMER_FULFILLED:
      return {
        ...state,
        list: state.list.map((customer) =>
          customer._id === action.payload._id ? action.payload : customer
        ),
      };
    case PUT_CUSTOMER_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default customersReducer;
