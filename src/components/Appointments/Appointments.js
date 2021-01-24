import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getAppointments as getAppointmentsAction } from "../../redux/actions/appointmentsActions";
import modalTypes from "../../redux/types/modalTypes";
import styles from "./appointment.module.css";
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

const Appointments = ({
  appointments,
  isLoading,
  error,
  showModal,
  getAppointments,
}) => {
  useEffect(() => {
    getAppointments();
  }, [getAppointments]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_APPOINTMENT);
  };

  const showDeleteModal = (appointmentId) => {
    showModal(modalTypes.DELETE_APPOINTMENT, { id: appointmentId });
  };

  const showUpdateModal = (appointmentId) => {
    showModal(modalTypes.UPDATE_APPOINTMENT, { id: appointmentId });
  };
  const columns = [
    {
      dataField: "building",
      text: "Building",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "boiler",
      text: "Boiler",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "technician",
      text: "Technician",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "startTime",
      text: "Start Time",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "endTime",
      text: "End Time",
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
              <FontAwesomeIcon icon={faPlus} color="white" /> Add new appointment
            </Button>
          </tr>
        </td>
      </table>
      <br></br>

      <BootstrapTable
        data={appointments}
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
      getAppointments: getAppointmentsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.appointments.isLoading,
    error: state.appointments.error,
    appointments: state.appointments.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
