import React, { useState } from "react";

const withColor = (WrappedComponent) => {
  const WithColor = (props) => {
    const [isBlack, setIsBlack] = useState(false);
    const colorChange = () => {
      setIsBlack((prevIsBlack) => !prevIsBlack);
    };
    return (
      <WrappedComponent
        isBlack={isBlack}
        colorChange={colorChange}
        {...props}
      />
    );
  };
  return WithColor;
};
export default withColor;
