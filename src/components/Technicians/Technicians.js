import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getTechnicians as getTechniciansAction } from "../../redux/actions/techniciansActions";
import modalTypes from "../../redux/types/modalTypes";
import styles from "./technician.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Technicians = ({
  technicians,
  isLoading,
  error,
  showModal,
  getTechnicians,
}) => {
  useEffect(() => {
    getTechnicians();
  }, [getTechnicians]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_TECHNICIAN);
  };

  const showDeleteModal = (technicianId) => {
    showModal(modalTypes.DELETE_TECHNICIAN, { id: technicianId });
  };

  const showUpdateModal = (technicianId) => {
    showModal(modalTypes.UPDATE_TECHNICIAN, { id: technicianId });
  };
  const columns = [
    {
      dataField: "fullName",
      text: "Name",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "boilersType",
      text: "Boilers Type",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "monthlyTimework",
      text: "Monthly Timework",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "phoneNumber",
      text: "Phone",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "link",
      text: "Action",
      textAlign: "center",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="primary" className="mr-2">
                <FontAwesomeIcon icon={faEye} color="white" />
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="primary" className="mr-2">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
            </Link>

            <Button color="danger" className="mr-2">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <table>
        <td align="right">
          <tr>
            <Button onClick={() => showAddModal()} color="success">
              <FontAwesomeIcon icon={faPlus} color="white" /> Add new technician
            </Button>
          </tr>
        </td>
      </table>
      <br></br>

      <BootstrapTable
        data={technicians}
        keyField="id"
        columns={columns}
        striped={true}
        hover={true}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
      getTechnicians: getTechniciansAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.technicians.isLoading,
    error: state.technicians.error,
    technicians: state.technicians.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Technicians);
