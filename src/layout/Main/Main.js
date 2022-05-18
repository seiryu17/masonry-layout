import React from "react";
import styles from "./Main.module.css";
import data from "../../datasource";

const Main = () => {
  return (
    <div className={styles["main-container"]}>
      {data
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((x, index) => {
          console.log(x);
          let temp = x.src.split("/");
          temp[4] = temp[4].substring(0, 3);
          x.width = `${temp[3]}px`;
          x.height = `${temp[4]}px`;
          return (
            <img
              src={x.src}
              alt={x.name}
              width={x.width}
              height={x.height}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default Main;
