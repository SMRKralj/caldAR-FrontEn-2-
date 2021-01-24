import {
  GET_BUILDINGS_PENDING,
  GET_BUILDINGS_FULFILLED,
  GET_BUILDINGS_REJECTED,
  POST_BUILDINGS_PENDING,
  POST_BUILDINGS_FULFILLED,
  POST_BUILDINGS_REJECTED,
  PUT_BUILDINGS_PENDING,
  PUT_BUILDINGS_FULFILLED,
  PUT_BUILDINGS_REJECTED,
  DELETE_BUILDINGS_PENDING,
  DELETE_BUILDINGS_FULFILLED,
  DELETE_BUILDINGS_REJECTED,
} from "../types/actionTypes";

const initialState = {
  list: [],
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUILDINGS_PENDING:
      return {
        ...state,
      };
    case GET_BUILDINGS_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_BUILDINGS_REJECTED:
      return {
        ...state,
      };
    case POST_BUILDINGS_PENDING:
      return {
        ...state,
      };
    case POST_BUILDINGS_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case POST_BUILDINGS_REJECTED:
      return {
        ...state,
      };
    case DELETE_BUILDINGS_PENDING:
      return {
        ...state,
      };
    case DELETE_BUILDINGS_FULFILLED:
      return {
        ...state,
        list: state.list.filter((building) => building._id !== action.payload),
      };
    case DELETE_BUILDINGS_REJECTED:
      return {
        ...state,
      };
    case PUT_BUILDINGS_PENDING:
      return {
        ...state,
      };
    case PUT_BUILDINGS_FULFILLED:
      return {
        ...state,
        list: state.list.map((building) =>
          building._id === action.payload._id ? action.payload : building
        ),
      };
    case PUT_BUILDINGS_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default buildingsReducer;
