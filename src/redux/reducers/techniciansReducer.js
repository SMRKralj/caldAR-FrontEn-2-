import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_FULFILLED,
  GET_TECHNICIANS_REJECTED,
  ADD_TECHNICIAN_FETCHING,
  ADD_TECHNICIAN_FULFILLED,
  ADD_TECHNICIAN_REJECTED,
  EDIT_TECHNICIAN_FETCHING,
  EDIT_TECHNICIAN_FULFILLED,
  EDIT_TECHNICIAN_REJECTED,
  DELETE_TECHNICIAN_FETCHING,
  DELETE_TECHNICIAN_FULFILLED,
  DELETE_TECHNICIAN_REJECTED,
} from "../types/techniciansTypes";

const initialState = {
  list: [],
};

const techniciansReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHNICIANS_FETCHING:
      return {
        ...state,
      };
    case GET_TECHNICIANS_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_TECHNICIANS_REJECTED:
      return {
        ...state,
      };
    case ADD_TECHNICIAN_FETCHING:
      return {
        ...state,
      };
    case ADD_TECHNICIAN_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_TECHNICIAN_REJECTED:
      return {
        ...state,
      };
    case DELETE_TECHNICIAN_FETCHING:
      return {
        ...state,
      };
    case DELETE_TECHNICIAN_FULFILLED:
      return {
        ...state,
        list: state.list.filter((technician) => technician._id !== action.payload),
      };
    case DELETE_TECHNICIAN_REJECTED:
      return {
        ...state,
      };
    case EDIT_TECHNICIAN_FETCHING:
      return {
        ...state,
      };
    case EDIT_TECHNICIAN_FULFILLED:
      return {
        ...state,
        list: state.list.map((technician) =>
          technician._id === action.payload._id ? action.payload : technician
        ),
      };
    case EDIT_TECHNICIAN_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default techniciansReducer;
