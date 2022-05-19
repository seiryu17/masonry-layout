import React from "react";

const Iconbutton = (props) => {
  console.log(props);
  return <div onClick={props.onClick}>{props.children}</div>;
};

export default React.memo(Iconbutton);
