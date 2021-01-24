import {
  GET_TECHNICIANS_FETCHING,
  GET_TECHNICIANS_REJECTED,
  GET_TECHNICIANS_FULFILLED,
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

const URL = "https://caldar-backend.herokuapp.com/technicians";

const getTechniciansFetching = () => ({
  type: GET_TECHNICIANS_FETCHING,
});

const getTechniciansFulfilled = (payload) => ({
  type: GET_TECHNICIANS_FULFILLED,
  payload,
});

const getTechniciansRejected = () => ({
  type: GET_TECHNICIANS_REJECTED,
});

export const getTechnicians = () => (dispatch) => {
  dispatch(getTechniciansFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getTechniciansFulfilled(response));
    })
    .catch((err) => {
      dispatch(getTechniciansRejected(err));
    });
};

const addTechnicianFetching = () => ({
  type: ADD_TECHNICIAN_FETCHING,
});

const addTechnicianFulfilled = (payload) => ({
  type: ADD_TECHNICIAN_FULFILLED,
  payload,
});

const addTechnicianRejected = () => ({
  type: ADD_TECHNICIAN_REJECTED,
});

export const addTechnician = (technician) => (dispatch) => {
  dispatch(addTechnicianFetching());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(technician),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addTechnicianFulfilled(response));
    })
    .catch((err) => {
      dispatch(addTechnicianRejected(err));
    });
};

const deleteTechnicianFetching = () => ({
  type: DELETE_TECHNICIAN_FETCHING,
});

const deleteTechnicianFulfilled = (payload) => ({
  type: DELETE_TECHNICIAN_FULFILLED,
  payload,
});

const deleteTechnicianRejected = () => ({
  type: DELETE_TECHNICIAN_REJECTED,
});

export const deleteTechnician = (_id) => (dispatch) => {
  dispatch(deleteTechnicianFetching());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteTechnicianFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteTechnicianRejected());
    });
};

const updateTechnicianFetching = () => ({
  type: EDIT_TECHNICIAN_FETCHING,
});

const updateTechnicianFulfilled = (payload) => ({
  type: EDIT_TECHNICIAN_FULFILLED,
  payload,
});

const updateTechnicianRejected = () => ({
  type: EDIT_TECHNICIAN_REJECTED,
});

export const updateTechnician = (newTechnician) => (dispatch) => {
  dispatch(updateTechnicianFetching());
  return fetch(`${URL}/${newTechnician._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTechnician),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(updateTechnicianFulfilled(newTechnician));
    })
    .catch((error) => {
      dispatch(updateTechnicianRejected(error));
    });
};
