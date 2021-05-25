import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""} p-0`}>{props.children}</div>;
}

export default Container;