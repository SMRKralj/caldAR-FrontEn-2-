import { hideModal as hideModalAction } from "../../../redux/actions/modalActions";
import { deleteBuilding as deleteBuildingAction } from "../../../redux/actions/buildingsActions";
import styles from "./removeBuildingMessage.module.css";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const RemoveBuildingMessage = ({ hideModal, deleteBuilding, buildingId }) => {
  const onDeleteBuilding = () => {
    deleteBuilding(buildingId);
    hideModal();
  };

  return (
    <div>
      Are you sure you want to delete this building?
      <div className={styles.buttonContainer}>
        <button onClick={() => hideModal()}>Cancel</button>
        <button primary onClick={() => onDeleteBuilding(buildingId)}>
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
      deleteBuilding: deleteBuildingAction,
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(RemoveBuildingMessage);
