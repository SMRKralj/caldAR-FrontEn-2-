import React, { useState } from "react";
import MaterialModal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { hideModal as hideModalAction } from "../../../redux/actions/modalActions";
import modalTypes from "../../../redux/types/modalTypes";
import styles from "./modal.module.css";
import BuildingForm from "../../Buildings/BuildingForm/BuildingForm";
import CustomerForm from "../../Customers/CustomerForm/CustomerForm";
import RemoveBuildingMessage from "../../Buildings/RemoveBuildingMessage/RemoveBuildingMessage";
import RemoveCustomerMessage from "../../Customers/RemoveCustomerMessage/RemoveCustomerMessage";

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top},-${left})`,
    background_color:"white"
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    //background_color: theme.palette.background.paper,
    background_color: "#1A237E",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
  },
}));

const Modal = ({ show, modalType, meta, hideModal }) => {
  const classes = useStyles();
  const { modalStyle } = useState(getModalStyle);

  let modalComponent;
  switch (modalType) {
    case modalTypes.ADD_BUILDING:
      modalComponent = <BuildingForm />;
      break;
    case modalTypes.UPDATE_BUILDING:
      modalComponent = (
        <BuildingForm buildingId={meta.id} buildingName={meta.name} />
      );
      break;
    case modalTypes.DELETE_BUILDING:
      modalComponent = <RemoveBuildingMessage buildingId={meta.id} />;
      break;
    case modalTypes.ADD_CUSTOMER:
      modalComponent = <CustomerForm />;
      break;
    case modalTypes.UPDATE_CUSTOMER:
      modalComponent = (
        <CustomerForm customerId={meta.id} customerName={meta.name} />
      );
      break;
    case modalTypes.DELETE_CUSTOMER:
      modalComponent = <RemoveCustomerMessage customerId={meta.id} />;
      break;
    default:
      modalComponent = null;
      break;
  }

  return (
    <MaterialModal
      open={show}
      onClose={hideModal}
      className={styles.fixedLayout}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        {modalComponent}
      </div>
    </MaterialModal>
  );
};

const mapStateToProps = (state) => {
  return {
    show: state.modal.show,
    modalType: state.modal.modalType,
    meta: state.modal.meta,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      hideModal: hideModalAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
