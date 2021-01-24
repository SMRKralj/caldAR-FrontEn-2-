import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getCustomers as getCustomersAction } from "../../redux/actions/customersActions";
import modalTypes from "../../redux/types/modalTypes";
import styles from "./customer.module.css";
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

const Customers = ({
  customers,
  isLoading,
  error,
  showModal,
  getCustomers,
}) => {
  useEffect(() => {
    getCustomers();
  }, [getCustomers]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_CUSTOMER);
  };

  const showDeleteModal = (customerId) => {
    showModal(modalTypes.DELETE_CUSTOMER, { id: customerId });
  };

  const showUpdateModal = (customerId) => {
    showModal(modalTypes.UPDATE_CUSTOMER, { id: customerId });
  };
  const columns = [
    {
      dataField: "cuit",
      text: "CUIT",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "name",
      text: "Name",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "email",
      text: "Email",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "address",
      text: "Address",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "buildings",
      text: "Buildings",
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

            <Button
              color="danger"
              className="mr-2"
              onClick={() => showDeleteModal()}
            >
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
              <FontAwesomeIcon icon={faPlus} color="white" /> Add new company
            </Button>
          </tr>
        </td>
      </table>
      <br></br>

      <BootstrapTable
        data={customers}
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
      getCustomers: getCustomersAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.customers.isLoading,
    error: state.customers.error,
    customers: state.customers.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);
