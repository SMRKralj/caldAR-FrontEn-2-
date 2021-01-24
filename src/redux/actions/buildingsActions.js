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

const URL = "https://caldar-backend.herokuapp.com/buildings";

const getBuildingsPending = () => ({
  type: GET_BUILDINGS_PENDING,
});

const getBuildingsFulfilled = (payload) => ({
  type: GET_BUILDINGS_FULFILLED,
  payload,
});

const getBuildingsRejected = () => ({
  type: GET_BUILDINGS_REJECTED,
});

export const getBuildings = () => (dispatch) => {
  dispatch(getBuildingsPending());
  return fetch(URL)
    .then((data) => data.json())
    .then((res) => {
      dispatch(getBuildingsFulfilled(res));
    })
    .catch((err) => {
      dispatch(getBuildingsRejected(err));
    });
};

const postBuildingPending = () => ({
  type: POST_BUILDINGS_PENDING,
});

const postBuildingFulfilled = (payload) => ({
  type: POST_BUILDINGS_FULFILLED,
  payload,
});

const postBuildingRejected = () => ({
  type: POST_BUILDINGS_REJECTED,
});

export const postBuilding = (building) => (dispatch) => {
  dispatch(postBuildingPending());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(building),
  })
    .then((data) => data.json())
    .then((res) => {
      dispatch(postBuildingFulfilled(res));
    })
    .catch((err) => {
      dispatch(postBuildingRejected(err));
    });
};

const deleteBuildingPending = () => ({
  type: DELETE_BUILDINGS_PENDING,
});

const deleteBuildingFulfilled = (payload) => ({
  type: DELETE_BUILDINGS_FULFILLED,
  payload,
});

const deleteBuildingRejected = () => ({
  type: DELETE_BUILDINGS_REJECTED,
});

export const deleteBuilding = (_id) => (dispatch) => {
  dispatch(deleteBuildingPending());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBuildingFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteBuildingRejected());
    });
};

const putBuildingPending = () => ({
  type: PUT_BUILDINGS_PENDING,
});
const putBuildingFulfilled = (payload) => ({
  type: PUT_BUILDINGS_FULFILLED,
  payload,
});
const putBuildingRejected = () => ({
  type: PUT_BUILDINGS_REJECTED,
});

export const putBuilding = (newBuilding) => (dispatch) => {
  dispatch(putBuildingPending());
  return fetch(`${URL}/${newBuilding._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBuilding),
  })
    .then((data) => data.json())
    .then(() => {
      dispatch(putBuildingFulfilled(newBuilding));
    })
    .catch((err) => {
      dispatch(putBuildingRejected(err));
    });
};
