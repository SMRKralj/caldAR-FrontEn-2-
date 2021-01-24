import React from "react";
import { Switch, Route,BrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
//import Technician from "./components/technician";
import Buildings from "./components/Buildings/Buildings";
import Boilers from "./components/Boilers/Boilers";
import BoilerTypes from "./components/BoilerTypes/BoilerTypes";
import Customers from "./components/Customers/Customers";
import Technicians from "./components/Technicians/Technicians";
import Appointments from "./components/Appointments/Appointments";

/*import AddBuildingContainer from "./containers/AddBuildingContainer"
import EditBuildingContainer from "./containers/EditBuildingContainer"
import ViewBuildingContainer from "./containers/ViewBuildingContainer"*/

function Routes() {
  return (
    <Switch>
      {
        //<Redirect exact push from="/" to="/"></Redirect>
      }

      <Route path="/customers">
        <MainLayout title="Building Companies">
          <Customers />
        </MainLayout>
      </Route>
      <Route path="/buildings">
        <MainLayout title="Buildings">
          <Buildings />
        </MainLayout>
      </Route>
      <Route path="/boilers">
        <MainLayout title="Boilers">
          <Boilers />
        </MainLayout>
      </Route>
      <Route path="/boilertypes">
        <MainLayout title="Boiler Types">
          <BoilerTypes />
        </MainLayout>
      </Route>
      <Route path="/technicians">
        <MainLayout title="Technicians">
          <Technicians />
        </MainLayout>
      </Route>
      <Route path="/appointments">
        <MainLayout title="Appointments">
          <Appointments />
        </MainLayout>
      </Route>
      <Route path="/">
        <MainLayout />
      </Route>
      <BrowserRouter>
        <Route path="/add" exact>
          <MainLayout></MainLayout>
        </Route>
        <Route path="/edit/:id" exact>
          <MainLayout></MainLayout>
        </Route>
        <Route path="/view/:id" exact>
          <MainLayout></MainLayout>
        </Route>
      </BrowserRouter>
    </Switch>
  );
}

export default Routes;
