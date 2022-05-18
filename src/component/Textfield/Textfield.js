import React from "react";
import styles from "./Textfield.module.css";

const Textfield = (props) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={props.onChange}
    ></input>
  );
};

export default Textfield;
