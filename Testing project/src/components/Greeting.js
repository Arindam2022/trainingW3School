import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Greetings to all!</h1>
      {!changedText&&<Output>Will this test work or not?</Output>}
      {changedText&&<Output>the text is changed.</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};
export default Greeting;
