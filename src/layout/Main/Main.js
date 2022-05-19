import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import datasource from "../../datasource";

const Main = (props) => {
  const [data, setData] = useState(datasource);

  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     let temp = [...data];
  //     temp = temp.filter((val) => {
  //       if (props.searchText === "") {
  //         return val;
  //       } else if (
  //         val.name.toLowerCase().includes(props.searchText.toLowerCase())
  //       ) {
  //         return val;
  //       }
  //       return false;
  //     });
  //     setData(temp);
  //   }, 500);
  //   return () => clearTimeout(delayDebounceFn);
  // }, [props.searchText]);

  return (
    <div className={styles["main-container"]}>
      {data
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((x, index) => {
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
