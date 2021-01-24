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

const URL = "https://caldar-backend.herokuapp.com/boilers";

const getBoilersPending = () => ({
  type: GET_BOILERS_PENDING,
});

const getBoilersFulfilled = (payload) => ({
  type: GET_BOILERS_FULFILLED,
  payload,
});

const getBoilersRejected = () => ({
  type: GET_BOILERS_REJECTED,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilersPending());
  return fetch(URL)
    .then((data) => data.json())
    .then((res) => {
      dispatch(getBoilersFulfilled(res));
    })
    .catch((err) => {
      dispatch(getBoilersRejected(err));
    });
};

const postBoilerPending = () => ({
  type: POST_BOILERS_PENDING,
});

const postBoilerFulfilled = (payload) => ({
  type: POST_BOILERS_FULFILLED,
  payload,
});

const postBoilerRejected = () => ({
  type: POST_BOILERS_REJECTED,
});

export const postBoiler = (boiler) => (dispatch) => {
  dispatch(postBoilerPending());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(boiler),
  })
    .then((data) => data.json())
    .then((res) => {
      dispatch(postBoilerFulfilled(res));
    })
    .catch((err) => {
      dispatch(postBoilerRejected(err));
    });
};

const deleteBoilerPending = () => ({
  type: DELETE_BOILERS_PENDING,
});

const deleteBoilerFulfilled = (payload) => ({
  type: DELETE_BOILERS_FULFILLED,
  payload,
});

const deleteBoilerRejected = () => ({
  type: DELETE_BOILERS_REJECTED,
});

export const deleteBoiler = (_id) => (dispatch) => {
  dispatch(deleteBoilerPending());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBoilerRejected());
    });
};

const putBoilerPending = () => ({
  type: PUT_BOILERS_PENDING,
});
const putBoilerFulfilled = (payload) => ({
  type: PUT_BOILERS_FULFILLED,
  payload,
});
const putBoilerRejected = () => ({
  type: PUT_BOILERS_REJECTED,
});

export const putBoiler = (newBoiler) => (dispatch) => {
  dispatch(putBoilerPending());
  return fetch(`${URL}/${newBoiler._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBoiler),
  })
    .then((data) => data.json())
    .then(() => {
      dispatch(putBoilerFulfilled(newBoiler));
    })
    .catch((err) => {
      dispatch(putBoilerRejected(err));
    });
};
