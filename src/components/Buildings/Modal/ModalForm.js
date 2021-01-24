import React, { useState } from "react";
import PropTypes from "prop-types";

const ModalForm = (props) => {
  const [id, setId] = useState(props.building.id);
  const [name, setName] = useState(props.building.name);
  const [address, setAddress] = useState(props.building.address);
  const [phone, setPhone] = useState(props.building.phone);
  const [customerId, setCustomerId] = useState(props.building.customerId);
  const [customerName, setCustomerName] = useState(props.building.customerName);
  const [installedBoilers, setInstalledBoilers] = useState(props.building.installedBoilers
  );

  // Submit Form
  const onSubmit = (e) => {
    console.log(props.building.id);
    e.preventDefault();
    props.closeModal();
    //console.log({ id, buildingId, boilerId, technician });
    props.addEditABuilding({
      id,
      name,
      address,
      phone,
      customerId,
      customerName,
      installedBoilers,
    });
    if (props.building.id === "") {
      setId("");
      setName("");
      setAddress("");
      setPhone("");
      setCustomerId("");
      setCustomerName("");
      setInstalledBoilers("");
    }
  };

  // Edit inputs on change
  const handleChange = (e) => {
    switch (e.target.name) {
      case "id":
        setId(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "address":
        setAddress(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "customerId":
        setCustomerId(e.target.value);
        break;
      case "customerName":
        setCustomerName(e.target.value);
        break;
      case "installedBoilers":
        setInstalledBoilers(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        name="id"
        placeholder="Building ID"
        value={id}
        onChange={handleChange}
        readOnly={props.building.id ? "readOnly" : ""}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
      />
      <input
        type="number"
        name="customerId"
        placeholder="Customer ID"
        value={customerId}
        onChange={handleChange}
      />
      <input
        type="text"
        name="customerName"
        placeholder="Customer Name"
        value={customerName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="installedBoilers"
        placeholder="Installed Boilers"
        value={installedBoilers}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

ModalForm.propTypes = {
  addEditBuilding: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  building: PropTypes.object.isRequired,
};

export default ModalForm;
