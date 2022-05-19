import React from "react";
import styles from "./Textfield.module.css";

const Textfield = (props) => {
  return (
    <input
      className={styles.input}
      type="text"
      onChange={props.onChange}
      data-testid="search-input"
    ></input>
  );
};

export default React.memo(Textfield);
