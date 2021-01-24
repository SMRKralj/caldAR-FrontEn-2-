import { hideModal as hideModalAction } from "../../../redux/actions/modalActions";
import { deleteCustomer as deleteCustomerAction } from "../../../redux/actions/customersActions";
import styles from "./removeCustomerMessage.module.css";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const RemoveCustomerMessage = ({ hideModal, deleteCustomer, customerId }) => {
  const onDeleteCustomer = () => {
    deleteCustomer(customerId);
    hideModal();
  };

  return (
    <div>
      Are you sure you want to delete this customer?
      <div className={styles.buttonContainer}>
        <button onClick={() => hideModal()}>Cancel</button>
        <button primary onClick={() => onDeleteCustomer(customerId)}>
          {" "}
          Confirm
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hideModal: hideModalAction,
      deleteCustomer: deleteCustomerAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RemoveCustomerMessage);
