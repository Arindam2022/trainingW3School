import React from "react";

const DemoOutput = (props) => {
  console.log("demo");
  return <p>{props.show ? "this is a new Paragraph." : ""}</p>;
};
export default React.memo(DemoOutput);
