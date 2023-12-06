import React from "react";
import { withColor } from "./withColor";

function ColorButton(props) {
  return (
    <button
      onClick={props.togglePrimaryColor}
      style={{
        backgroundColor: props.primaryColor ? "white" : "black",
        color: props.primaryColor ? "black" : "white",
        padding: "8px 16px",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: "bold",
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
      }}
    >
      {props.children}
    </button>
  );
}

export default withColor(ColorButton);
