import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal/Modal";
import "./Buildings.css";

const BuildingItem = (props) => {
  const [show, setShow] = useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const { id, name, address, phone, customerId, customerName, installedBoilers } = props.building;
  
  return (

    <ul className="ulTable">
     <li className="liTable">{name}</li>
      <li className="liTable">{address}</li>
      <li className="liTable">{phone}</li>
      <li className="liTable">{customerId}</li>
      <li className="liTable">{customerName}</li>
      <li className="liTable">{installedBoilers}</li>
      <li className="liTable">
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          View
        </button>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Edit
        </button>
        <button onClick={props.deleteBuilding.bind(this, id)}>Delete</button>
      </li>
      <Modal
        title="Edit Building"
        show={show}
        handleClose={hideModal}
        addEditBuilding={props.editBuilding}
        building={props.building}
      />
    </ul>
  );
};

BuildingItem.propTypes = {
  building: PropTypes.object.isRequired,
  deleteBuilding: PropTypes.func.isRequired,
  editBuilding: PropTypes.func.isRequired,
};

export default BuildingItem;
