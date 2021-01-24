import React from "react";
import Header from "../Header/Header";
import SideNav from "../SideNav/Sidenav";
import Footer from "../Footer/Footer";
import Section from "../Section/Section";
import styles from "./mainLayout.module.css";
import Modal from "../SharedComponents/Modal/Modal";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.appContainer}>
      <Header  />
      <div className={styles.navBarSectionContainer}>
        <SideNav />
        <Section>{children}</Section>
      </div>
      <Footer />
    <Modal/>
    </div>
  );
};

export default MainLayout;
