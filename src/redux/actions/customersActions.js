import {
  GET_CUSTOMERS_FETCHING,
  GET_CUSTOMERS_REJECTED,
  GET_CUSTOMERS_FULFILLED,
  POST_CUSTOMER_FETCHING,
  POST_CUSTOMER_FULFILLED,
  POST_CUSTOMER_REJECTED,
  PUT_CUSTOMER_FETCHING,
  PUT_CUSTOMER_FULFILLED,
  PUT_CUSTOMER_REJECTED,
  DELETE_CUSTOMER_FETCHING,
  DELETE_CUSTOMER_FULFILLED,
  DELETE_CUSTOMER_REJECTED,
} from "../types/customersTypes";

const URL = "https://caldar-backend.herokuapp.com/customers";

const getCustomersFetching = () => ({
  type: GET_CUSTOMERS_FETCHING,
});

const getCustomersFulfilled = (payload) => ({
  type: GET_CUSTOMERS_FULFILLED,
  payload,
});

const getCustomersRejected = () => ({
  type: GET_CUSTOMERS_REJECTED,
});

export const getCustomers = () => (dispatch) => {
  dispatch(getCustomersFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getCustomersFulfilled(response));
    })
    .catch((err) => {
      dispatch(getCustomersRejected(err));
    });
};

const postCustomerFetching = () => ({
  type: POST_CUSTOMER_FETCHING,
});

const postCustomerFulfilled = (payload) => ({
  type: POST_CUSTOMER_FULFILLED,
  payload,
});

const postCustomerRejected = () => ({
  type: POST_CUSTOMER_REJECTED,
});

export const postCustomer = (customer) => (dispatch) => {
  dispatch(postCustomerFetching());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(customer),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(postCustomerFulfilled(response));
    })
    .catch((err) => {
      dispatch(postCustomerRejected(err));
    });
};

const deleteCustomerFetching = () => ({
  type: DELETE_CUSTOMER_FETCHING,
});

const deleteCustomerFulfilled = (payload) => ({
  type: DELETE_CUSTOMER_FULFILLED,
  payload,
});

const deleteCustomerRejected = () => ({
  type: DELETE_CUSTOMER_REJECTED,
});

export const deleteCustomer = (_id) => (dispatch) => {
  dispatch(deleteCustomerFetching());
  return fetch(`${URL}/${_id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteCustomerFulfilled(_id));
    })
    .catch(() => {
      dispatch(deleteCustomerRejected());
    });
};

const putCustomerFetching = () => ({
  type: PUT_CUSTOMER_FETCHING,
});

const putCustomerFulfilled = (payload) => ({
  type: PUT_CUSTOMER_FULFILLED,
  payload,
});

const putCustomerRejected = () => ({
  type: PUT_CUSTOMER_REJECTED,
});

export const putCustomer = (newCustomer) => (dispatch) => {
  dispatch(putCustomerFetching());
  return fetch(`${URL}/${newCustomer._id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCustomer),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch(putCustomerFulfilled(newCustomer));
    })
    .catch((error) => {
      dispatch(putCustomerRejected(error));
    });
};
