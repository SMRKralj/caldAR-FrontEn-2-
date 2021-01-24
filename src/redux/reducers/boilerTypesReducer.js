import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_FULFILLED,
  GET_BOILERTYPES_REJECTED,
  ADD_BOILERTYPES_FETCHING,
  ADD_BOILERTYPES_FULFILLED,
  ADD_BOILERTYPES_REJECTED,
  EDIT_BOILERTYPES_FETCHING,
  EDIT_BOILERTYPES_FULFILLED,
  EDIT_BOILERTYPES_REJECTED,
  DELETE_BOILERTYPES_FETCHING,
  DELETE_BOILERTYPES_FULFILLED,
  DELETE_BOILERTYPES_REJECTED,
} from "../types/btTypes";

const initialState = {
  list: [],
};

const BoilerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERTYPES_FETCHING:
      return {
        ...state,
      };
    case GET_BOILERTYPES_FULFILLED:
      return {
        ...state,
        list: action.payload,
      };
    case GET_BOILERTYPES_REJECTED:
      return {
        ...state,
      };

    case ADD_BOILERTYPES_FETCHING:
      return {
        ...state,
      };
    case ADD_BOILERTYPES_FULFILLED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case ADD_BOILERTYPES_REJECTED:
      return {
        ...state,
      };
    case DELETE_BOILERTYPES_FETCHING:
      return {
        ...state,
      };
    case DELETE_BOILERTYPES_FULFILLED:
      return {
        ...state,
        list: state.list.filter(
          (boilertype) => boilertype._id !== action.payload
        ),
      };
    case DELETE_BOILERTYPES_REJECTED:
      return {
        ...state,
      };
    case EDIT_BOILERTYPES_FETCHING:
      return {
        ...state,
      };
    case EDIT_BOILERTYPES_FULFILLED:
      return {
        ...state,
        list: state.list.map((boilertype) =>
          boilertype._id === action.payload._id ? action.payload : boilertype
        ),
      };
    case EDIT_BOILERTYPES_REJECTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default BoilerTypesReducer;
