import {
  GET_APPOINTMENTS_FETCHING,
  GET_APPOINTMENTS_FULFILLED,
  GET_APPOINTMENTS_REJECTED,
  ADD_APPOINTMENT_FETCHING,
  ADD_APPOINTMENT_FULFILLED,
  ADD_APPOINTMENT_REJECTED,
  EDIT_APPOINTMENT_FETCHING,
  EDIT_APPOINTMENT_FULFILLED,
  EDIT_APPOINTMENT_REJECTED,
  DELETE_APPOINTMENT_FETCHING,
  DELETE_APPOINTMENT_FULFILLED,
  DELETE_APPOINTMENT_REJECTED,
} from "../types/appointmentsTypes";

const initialState = {
  list: [],
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_APPOINTMENTS_FETCHING:
      return {
        ...state,
      };
    case GET_APPOINTMENTS_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_APPOINTMENTS_REJECTED:
      return {
        ...state,
      };
    case ADD_APPOINTMENT_FETCHING:
      return {
        ...state,
      };
    case ADD_APPOINTMENT_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_APPOINTMENT_REJECTED:
      return {
        ...state,
      };
    case DELETE_APPOINTMENT_FETCHING:
      return {
        ...state,
      };
    case DELETE_APPOINTMENT_FULFILLED:
      return {
        ...state,
        list: state.list.filter(
          (appointment) => appointment._id !== action.payload
        ),
      };
    case DELETE_APPOINTMENT_REJECTED:
      return {
        ...state,
      };
    case EDIT_APPOINTMENT_FETCHING:
      return {
        ...state,
      };
    case EDIT_APPOINTMENT_FULFILLED:
      return {
        ...state,
        list: state.list.map((appointment) =>
          appointment._id === action.payload._id ? action.payload : appointment
        ),
      };
    case EDIT_APPOINTMENT_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
