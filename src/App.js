import "./App.css";
import { useEffect, useContext, useState } from "react";
import { subscribeToTimer } from "./api";

import { WeightedDiceDeckController } from "./components/BalancedDice";
import { diceContext } from "./components/contexts/diceContext";
import DiceGraph from "./components/DiceGraph";

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

//function App() {
const App = () => {
  const {
    state: { dice, count },
    dispatch,
  } = useContext(diceContext);

  const timestamp = "NULL";
  const diceController = new WeightedDiceDeckController();
  //const [timestamp, setTimestamp] = useState("NULL");

  useEffect(() => {
    //const diceResult = dice.throwDice();
    //console.log(JSON.stringify(dice));
    //payload: { dice: { x: diceResult.dice1, y: diceResult.dice2 } },
    //subscribeToTimer((_err, timestamp) => setTimestamp(timestamp));
  }, []);

  function rollDice(x = 1) {
    for (var i = 0; i <= x - 1; i++) {
      const d = diceController.throwDice();
      const dice1 = d.dice1;
      const dice2 = d.dice2;
      dispatch({
        type: "add",
        payload: {
          index: dice ? dice.length + 1 : 0,
          x: dice1,
          y: dice2,
          value: dice1 + dice2,
        },
      });
    }
  }

  //const listItems = dice.map((d) => <li key={d.index}></li>);
  return (
    <>
      <DiceGraph
        dice={dice}
        count={count}
        //count={Object.entries(count).map((e) => ({ [e[0]]: e[1] }))}
      />

      <div className="App">
        <p>Total rolls: {dice.length}</p>
        <button onClick={() => rollDice()}>Roll Dice</button>
        <button onClick={() => rollDice(10)}>Roll 10</button>
        <button onClick={() => rollDice(50)}>Roll 50</button>
        <p>{/*JSON.stringify(dice)*/}</p>
        <div>
          {dice
            ? dice.map((item, index) => (
                <h2 key={index}>
                  {item.x + item.y}
                  <button
                    key={index}
                    onClick={() =>
                      dispatch({ type: "remove", payload: { index: index } })
                    }
                  >
                    Remove
                  </button>
                </h2>
              ))
            : null}
        </div>
        <header className="App-header"></header>
        <p className="App-intro">This is the timestamp value: {timestamp}</p>
      </div>
    </>
  );
};

export default App;
