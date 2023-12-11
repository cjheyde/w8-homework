import React from "react";
import withColorSol from "./withColorSol";

const ColorButton = React.memo(({ isBlack, colorChange }) => {
  const background = isBlack ? "WHITE" : "BLACK";

  return (
    <div className={background}>
      <button onClick={colorChange}>{background}</button>
      <h1>Uhulll we have a Dark background now =)</h1>
    </div>
  );
});

export default withColorSol(ColorButton);