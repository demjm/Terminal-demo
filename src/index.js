import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [idle, updateIdle] = useState(false);
  const [text, updateText] = useState("");
  const setIdleState = val => updateIdle(val);
  const beginTyping = () => {
    for (let i = 0; i < textData.length; i++) {
      const text = textData[i].text;
      console.log(text);
      typeText(text);
    }
  };
  const typeText = text => {
    for (const index in text) {
      const letter = text[index];
      setTimeout(() => {
        updateText(`${text + letter}`);
      }, 200);
    }
  };

  useEffect(() => {
    return () => {
      setIdleState(true);
      console.log("useeffeeeect");
      setTimeout(() => {
        setIdleState(false);
      }, 300);
    };
  }, [text]);

  const caretClassName = idle ? `caret idle` : `caret blinking`;

  return (
    <div className="App">
      <div className="line">
        <div className="auto-text">{text}</div>
        <div className={caretClassName} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

let textData = [{ text: "some text" }];
