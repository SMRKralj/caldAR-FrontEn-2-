import {
  GET_BOILERS_PENDING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  POST_BOILERS_PENDING,
  POST_BOILERS_FULFILLED,
  POST_BOILERS_REJECTED,
  PUT_BOILERS_PENDING,
  PUT_BOILERS_FULFILLED,
  PUT_BOILERS_REJECTED,
  DELETE_BOILERS_PENDING,
  DELETE_BOILERS_FULFILLED,
  DELETE_BOILERS_REJECTED,
} from "../types/boilersTypes";

const initialState = {
  list: [],
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERS_PENDING:
      return {
        ...state,
      };
    case GET_BOILERS_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_BOILERS_REJECTED:
      return {
        ...state,
      };
    case POST_BOILERS_PENDING:
      return {
        ...state,
      };
    case POST_BOILERS_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case POST_BOILERS_REJECTED:
      return {
        ...state,
      };
    case DELETE_BOILERS_PENDING:
      return {
        ...state,
      };
    case DELETE_BOILERS_FULFILLED:
      return {
        ...state,
        list: state.list.filter((boiler) => boiler._id !== action.payload),
      };
    case DELETE_BOILERS_REJECTED:
      return {
        ...state,
      };
    case PUT_BOILERS_PENDING:
      return {
        ...state,
      };
    case PUT_BOILERS_FULFILLED:
      return {
        ...state,
        list: state.list.map((boiler) =>
          boiler._id === action.payload._id ? action.payload : boiler
        ),
      };
    case PUT_BOILERS_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default boilersReducer;
