import "./App.css";
import { useState, useEffect } from "react";
import { subscribeToTimer, hostCreateNewGame, playerJoinGame } from "./api";

import "./components/ColorSelect";
import ColorSelect from "./components/ColorSelect";

function App() {
  const [timestamp, setTimestamp] = useState("NULL");
  const [gameState, setGameState] = useState({});
  const [color, setColor] = useState(null);

  useEffect(() => {
    //subscribeToTimer((err, timestamp) => setTimestamp(timestamp));
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={hostCreateNewGame}>New Game</button>
        {color ? (
          <>
            <p>Current color is: {color.label}</p>
            <button onClick={playerJoinGame(color.value)}>Join Game</button>
          </>
        ) : (
          <p>Please choose a color</p>
        )}
      </header>
      <ColorSelect className="ColorSelect" onChange={setColor}></ColorSelect>
      <p className="App-intro">This is the timer value: {timestamp}</p>
    </div>
  );
}

export default App;
