import React, { useState, useEffect, useMemo } from "react";
import styles from "./Main.module.css";
import datasource from "../../datasource";
import debouce from "lodash.debounce";
import Navbar from "../../parts/Navbar/Navbar";

const Main = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  let listToDisplay = datasource;

  if (searchTerm !== "") {
    listToDisplay = datasource.filter((fruit) => {
      return fruit.name.includes(searchTerm);
    });
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <Navbar onHandleChangeSearch={debouncedResults} />
      <div
        className={
          listToDisplay.length > 0
            ? styles["main-container"]
            : styles["no-items"]
        }
      >
        {listToDisplay.length > 0
          ? listToDisplay
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
              })
          : "Sorry, no items found."}
      </div>
    </>
  );
};

export default Main;
