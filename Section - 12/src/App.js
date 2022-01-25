import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutpput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("app");

  const toggleParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((x) => !x);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Enable Toggler</Button>
      <Button onClick={toggleParaHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
