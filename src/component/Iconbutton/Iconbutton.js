import React from "react";

const Iconbutton = (props) => {
  return (
    <div data-testid="icon-button" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default React.memo(Iconbutton);
