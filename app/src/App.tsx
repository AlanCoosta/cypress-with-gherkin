import { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const onCallMessage = useCallback((text) => {
    setMessage(text);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>

        <div style={{ display: "flex" }}>
          <button
            onClick={() => onCallMessage("Good morning")}
            data-test="button-goodMorning"
          >
            Say Good morning!
          </button>

          <button
            onClick={() => onCallMessage("Good night")}
            data-test="button-goodNight"
          >
            Say Good night!
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
