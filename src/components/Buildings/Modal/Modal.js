import React from "react";
import "./Modal.css";
import ModalForm from "./ModalForm";
import PropTypes from "prop-types";

const Modal = ({
  handleClose,
  show,
  addEditBuilding,
  building,
  title,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{title}</h2>
        <ModalForm
          addEditBuilding={addEditBuilding}
          closeModal={handleClose}
          building={building}
        />
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  addEditBuilding: PropTypes.func.isRequired,
  building: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
