import { withColor } from "./withColor";

function ColorHeadingBase(props) {
  return (
    <h1
      style={{
        color: props.primaryColor ? "black" : "white",
      }}
    >
      {props.children}{" "}
      <button onClick={props.togglePrimaryColor}>(toggle theme)</button>
    </h1>
  );
}

export default withColor(ColorHeadingBase);
