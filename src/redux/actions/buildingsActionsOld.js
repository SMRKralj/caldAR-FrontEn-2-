import {
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
} from '../types/actionTypesOld'

const URL = "https://caldar-backend.herokuapp.com/buildings";

export const addBuilding = (building) => ({
  type: ADD_BUILDING,
  building: building,
});

export const editBuilding = (building) => ({
  type: EDIT_BUILDING,
  building: building,
});

export const deleteBuilding = (id) => ({
  type: DELETE_BUILDING,
  id: id,
});

export const getBuildings = () => (dispatch) => {
    return fetch(URL)
    .then((data) => data.json())
    .then((res) => {
      dispatch(getBuildings(res));
    })
    .catch((err) => {
      
    });
};