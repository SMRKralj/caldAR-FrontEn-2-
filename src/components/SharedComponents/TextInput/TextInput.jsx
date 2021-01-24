import React from "react";
import styles from "./textInput.module.css";

const TextInput = ({ input, meta, label, placeholder }) => (
  <>
    <label className={styles.textInputLabel}>{label}</label>
    <input
      className={styles.textInput}
      {...input}
      type="text"
      placeholder={placeholder}
    />
    {meta.error && meta.touched && (
      <div className={styles.error}>{meta.error}</div>
    )}
  </>
);
export default TextInput;
