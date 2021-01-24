import {
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
  GET_BUILDINGS,
} from '../types/actionTypes'

//import buildings from "../../data/buildings.json";

const initialState = {
  list: [],
};

const buildingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUILDING:
      return {
        ...state,
        list: [...state.list, action.building],
      };
    case EDIT_BUILDING:
      return {
        ...state,
        list: state.list.map((building) => {
          return building.id === action.building.id
            ? action.building
            : building;
        }),
      };
    case GET_BUILDINGS:
      return {
        ...state,
        list: action.payload,
      };
    case DELETE_BUILDING:
      console.log(action.id);
      return {
        ...state,
        list: state.list.filter((building) => building.id !== action.id),
      };
    default:
      return state;
  }
};

export default buildingsReducer;
