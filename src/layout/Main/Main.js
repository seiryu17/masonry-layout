import React, { useState, useEffect, useMemo } from "react";
import styles from "./Main.module.css";
import datasource from "../../datasource";
import debouce from "lodash.debounce";
import Navbar from "../../parts/Navbar/Navbar";
import LazyLoad from "react-lazyload";

const Main = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sort image alphabetical by attribute "NAME" and put it into variable
  let listToDisplay = datasource.sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  // To filter item list by user input search
  if (searchTerm !== "") {
    listToDisplay = datasource.filter((fruit) => {
      return fruit.name.includes(searchTerm);
    });
  }

  // Function used to get value on input change
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to give delay for user input for 500ms before doing the filter
  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 500);
  }, []);

  // Useeffect to clean up the debounce
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
          ? listToDisplay.map((x, index) => {
              let temp = x.src.split("/");
              temp[4] = temp[4].substring(0, 3);
              x.width = `${temp[3]}px`;
              x.height = `${temp[4]}px`;
              return (
                <LazyLoad key={index} height={x.height} once>
                  <img
                    src={x.src}
                    alt={x.name}
                    width={x.width}
                    height={x.height}
                  />
                </LazyLoad>
              );
            })
          : "Sorry, no items found."}
      </div>
    </>
  );
};

export default Main;
