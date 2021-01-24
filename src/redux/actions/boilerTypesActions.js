import {
  GET_BOILERTYPES_FETCHING,
  GET_BOILERTYPES_REJECTED,
  GET_BOILERTYPES_FULFILLED,
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

const URL = "https://caldar-backend.herokuapp.com/boilerTypes";

const getBoilerTypesFetching = () => ({
  type: GET_BOILERTYPES_FETCHING,
});

const getBoilerTypesFulfilled = (payload) => ({
  type: GET_BOILERTYPES_FULFILLED,
  payload,
});

const getBoilerTypesRejected = () => ({
  type: GET_BOILERTYPES_REJECTED,
});

export const getBoilerTypes = () => (dispatch) => {
  dispatch(getBoilerTypesFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilerTypesFulfilled(response));
    })
    .catch((err) => {
      dispatch(getBoilerTypesRejected(err));
    });
};

const addBoilerTypesFetching = () => ({
  type: ADD_BOILERTYPES_FETCHING,
});

const addBoilertypesFulfilled = (payload) => ({
  type: ADD_BOILERTYPES_FULFILLED,
  payload,
});

const addBoilerTypesRejected = () => ({
  type: ADD_BOILERTYPES_REJECTED,
});

export const addBoilerTypes = (boilertype) => (dispatch) => {
  dispatch(addBoilerTypesFetching());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(boilertype),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addBoilertypesFulfilled(response));
    })
    .catch((err) => {
      dispatch(addBoilerTypesRejected(err));
    });
};

const deleteBoilerTypesFetching = () => ({
  type: DELETE_BOILERTYPES_FETCHING,
});

const deleteBoilerTypesFulfilled = (payload) => ({
  type: DELETE_BOILERTYPES_FULFILLED,
  payload,
});

const deleteBoilerTypesRejected = () => ({
  type: DELETE_BOILERTYPES_REJECTED,
});

export const deleteBoilerTypes = (_id) => (dispatch) => {
  dispatch(deleteBoilerTypesFetching());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerTypesFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBoilerTypesRejected());
    });
};

const updateBoilertypesFetching = () => ({
  type: EDIT_BOILERTYPES_FETCHING,
});

const updateBoilerTypesFulfilled = (payload) => ({
  type: EDIT_BOILERTYPES_FULFILLED,
  payload,
});

const updateBoilerTypesRejected = () => ({
  type: EDIT_BOILERTYPES_REJECTED,
});

export const updateBoilerTypes = (newBoilerTypes) => (dispatch) => {
  dispatch(updateBoilertypesFetching());
  return fetch(`${URL}/${newBoilerTypes._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBoilerTypes),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(updateBoilerTypesFulfilled(newBoilerTypes));
    })
    .catch((error) => {
      dispatch(updateBoilerTypesRejected(error));
    });
};
