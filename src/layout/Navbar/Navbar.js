import React from "react";
import styles from "./Navbar.module.css";
import Iconbutton from "../../component/Iconbutton/Iconbutton";
import { ReactComponent as HomeIcon } from "../../assets/icon/iconmonstr-home-6.svg";
import { ReactComponent as BellIcon } from "../../assets/icon/iconmonstr-bell-1.svg";
import { ReactComponent as UserIcon } from "../../assets/icon/iconmonstr-user-19.svg";
import Textfield from "../../component/Textfield/Textfield";

const Navbar = () => {
  const onHandleChangeSearch = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.container}>
      <Textfield onChange={onHandleChangeSearch} />
      <Iconbutton onClick={() => alert("Im Home Icon")}>
        <HomeIcon fill="#8c8c8c" />
      </Iconbutton>
      <Iconbutton onClick={() => alert("Im Bell Icon")}>
        <BellIcon fill="#8c8c8c" />
      </Iconbutton>
      <Iconbutton onClick={() => alert("Im User Icon")}>
        <UserIcon fill="#8c8c8c" />
      </Iconbutton>
    </div>
  );
};

export default Navbar;
