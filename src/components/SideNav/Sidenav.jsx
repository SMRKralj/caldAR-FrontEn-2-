import React from "react";
import styles from "./sideNav.module.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function Sidenav() {
  return (
    <div className={styles.navBarContainer}>
      <SideNav
        style={{
          top: 80,
          left: 0,
          justifyContent: "center",
          backgroundColor: "#193C78",
          width: "16.66vw",
        }}
      >
        <SideNav.Nav defaultSelected="companies">
          <Link
            to="/customers"
            style={{ top: 100, textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="customers" style={{ marginBottom: 40 }}>
              <NavIcon>
                <i className="fas fa-hotel" style={{ fontSize: "20px" }} />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Building Companies</NavText>
            </NavItem>
          </Link>
          <Link
            to="/buildings"
            style={{ textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="buildings" style={{ marginBottom: 40 }}>
              <NavIcon>
                <i
                  className="far fa-building"
                  style={{ color: "#DC8A2A", fontSize: "20px" }}
                />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Buildings</NavText>
            </NavItem>
          </Link>
          <Link
            to="/boilers"
            style={{ textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="boilers" style={{ marginBottom: 40 }}>
              <NavIcon>
                <i
                  className="fas fa-temperature-high"
                  style={{ fontSize: "26px" }}
                />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Boilers</NavText>
            </NavItem>
          </Link>
          <Link
            to="/boilerTypes"
            style={{ textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="boilerTypes" style={{ marginBottom: 40 }}>
              <NavIcon>
                <i className="fas fa-hotel" style={{ fontSize: "26px" }} />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Boiler Types</NavText>
            </NavItem>
          </Link>
          <Link
            to="/technicians"
            style={{ textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="technicians" style={{ marginBottom: 40 }}>
              <NavIcon>
                <i className="fas fa-hard-hat" style={{ fontSize: "20px" }} />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Technicians</NavText>
            </NavItem>
          </Link>
          <Link
            to="/appointments"
            style={{ textDecoration: "none", color: "#f8f8f8" }}
          >
            <NavItem eventKey="appointments" style={{ marginBottom: 100 }}>
              <NavIcon>
                <i className="fas fa-hard-hat" style={{ fontSize: "20px" }} />
              </NavIcon>
              <NavText style={{ fontSize: "18px" }}>Appointments</NavText>
            </NavItem>
          </Link>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default Sidenav;
