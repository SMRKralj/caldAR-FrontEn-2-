import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getBoilerTypes as getBoilerTypesAction } from "../../redux/actions/boilerTypesActions";
import modalTypes from "../../redux/types/modalTypes";
//import styles from "./building.module.css";
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

const BoilerTypes = ({
  boilerTypes,
  isLoading,
  error,
  showModal,
  getBoilerTypes,
}) => {
  useEffect(() => {
    getBoilerTypes();
  }, [getBoilerTypes]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_BOILERTYPES);
  };

  const showDeleteModal = (buildingId) => {
    showModal(modalTypes.DELETE_BOILERTYPES, { id: buildingId });
  };

  const showUpdateModal = (buildingId) => {
    showModal(modalTypes.UPDATE_BOILERTYPES, { id: buildingId });
  };
  const columns = [
    {
      dataField: "type",
      text: "Boiler Type",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "description",
      text: "Description",
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
              <FontAwesomeIcon icon={faPlus} color="white" /> Add new boiler
              type
            </Button>
          </tr>
        </td>
      </table>
      <br></br>

      <BootstrapTable
        data={boilerTypes}
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
      getBoilerTypes: getBoilerTypesAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.boilerTypes.isLoading,
    error: state.boilerTypes.error,
    boilerTypes: state.boilerTypes.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BoilerTypes);
