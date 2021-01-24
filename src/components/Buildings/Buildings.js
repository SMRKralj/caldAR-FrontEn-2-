import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showModal as showModalAction } from "../../redux/actions/modalActions";
import { getBuildings as getBuildingsAction } from "../../redux/actions/buildingsActions";
import modalTypes from "../../redux/types/modalTypes";
import styles from "./building.module.css";
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

const Buildings = ({
  buildings,
  isLoading,
  error,
  showModal,
  getBuildings,
}) => {
  useEffect(() => {
    getBuildings();
  }, [getBuildings]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  const showAddModal = () => {
    showModal(modalTypes.ADD_BUILDING);
  };

 const showDeleteModal = (buildingId) => {
    showModal(modalTypes.DELETE_BUILDING, { id: buildingId });
  };

  const showUpdateModal = (buildingId) => {
    showModal(modalTypes.UPDATE_BUILDING, { id: buildingId });
  };
  
  const columns = [
    {
      dataField: "address",
      text: "Address",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },
    {
      dataField: "fullName",
      text: "Name",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    {
      dataField: "phoneNumber",
      text: "Phone Number",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },

    /*{
       dataField: "boilers",
     
       text: "Boilers",
      headerStyle: () => {
        return { width: "150%", textAlign: "center" };
      },
    },*/
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
             <Button color="success" onClick={() => showAddModal()}>
               <FontAwesomeIcon icon={faPlus} color="white" />
               Add new building
             </Button>
           </tr>
         </td>
       </table>
       <br></br>
       <BootstrapTable
         data={buildings}
         keyField="id"
         columns={columns}
         striped={true}
         hover={true}
       />
     </div>
   );
 };
  
  /*return (
    <div className={styles.buildingContainer}>
      <button onClick={() => showAddModal()}>Add building</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Address</th>
            <th scope="col">fullName</th>
            <th scope="col">PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((item) => (
            <tr key={item.id}>
              <td>{item.address}</td>
              <td>{item.fullName}</td>
              <td>{item.phoneNumber}</td>

              <td>
                <button
                  style={btnStyleDel}
                  onClick={() => showDeleteModal(item.id)}
                >
                  X
                </button>
              </td>
              <td>
                <button
                  style={btnStyleEdit}
                  onClick={() =>
                    showUpdateModal(
                      item,
                      item.id,
                      item.name,
                      item.address,
                      item.phone,
                      item.customerId,
                      item.customerName
                    )
                  }
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>)
}

const btnStyleEdit = {
  background: "#193c78",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
const btnStyleDel = {
  background: "#dc8a2a",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};*/

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      showModal: showModalAction,
      getBuildings: getBuildingsAction,
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.buildings.isLoading,
    error: state.buildings.error,
    buildings: state.buildings.list,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Buildings);
