import {
  GET_APPOINTMENTS_FETCHING,
  GET_APPOINTMENTS_REJECTED,
  GET_APPOINTMENTS_FULFILLED,
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

const URL = "https://caldar-backend.herokuapp.com/appointments";

const getAppointmentsFetching = () => ({
  type: GET_APPOINTMENTS_FETCHING,
});

const getAppointmentsFulfilled = (payload) => ({
  type: GET_APPOINTMENTS_FULFILLED,
  payload,
});

const getAppointmentsRejected = () => ({
  type: GET_APPOINTMENTS_REJECTED,
});

export const getAppointments = () => (dispatch) => {
  dispatch(getAppointmentsFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getAppointmentsFulfilled(response));
    })
    .catch((err) => {
      dispatch(getAppointmentsRejected(err));
    });
};

const addAppointmentFetching = () => ({
  type: ADD_APPOINTMENT_FETCHING,
});

const addAppointmentFulfilled = (payload) => ({
  type: ADD_APPOINTMENT_FULFILLED,
  payload,
});

const addAppointmentRejected = () => ({
  type: ADD_APPOINTMENT_REJECTED,
});

export const addAppointment = (appointment) => (dispatch) => {
  dispatch(addAppointmentFetching());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addAppointmentFulfilled(response));
    })
    .catch((err) => {
      dispatch(addAppointmentRejected(err));
    });
};

const deleteAppointmentFetching = () => ({
  type: DELETE_APPOINTMENT_FETCHING,
});

const deleteAppointmentFulfilled = (payload) => ({
  type: DELETE_APPOINTMENT_FULFILLED,
  payload,
});

const deleteAppointmentRejected = () => ({
  type: DELETE_APPOINTMENT_REJECTED,
});

export const deleteAppointment = (_id) => (dispatch) => {
  dispatch(deleteAppointmentFetching());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteAppointmentFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteAppointmentRejected());
    });
};

const updateAppointmentFetching = () => ({
  type: EDIT_APPOINTMENT_FETCHING,
});

const updateAppointmentFulfilled = (payload) => ({
  type: EDIT_APPOINTMENT_FULFILLED,
  payload,
});

const updateAppointmentRejected = () => ({
  type: EDIT_APPOINTMENT_REJECTED,
});

export const updateAppointment = (newAppointment) => (dispatch) => {
  dispatch(updateAppointmentFetching());
  return fetch(`${URL}/${newAppointment._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAppointment),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(updateAppointmentFulfilled(newAppointment));
    })
    .catch((error) => {
      dispatch(updateAppointmentRejected(error));
    });
};
