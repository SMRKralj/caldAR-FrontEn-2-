import React from "react";
import section from './section.module.css';
//import Modal from "../SharedComponents/Modal/Modal";

const Section = ({children}) => {
  return (
      <section style={section.style}>
        {children}
      </section>
  );
};

export default Section;
