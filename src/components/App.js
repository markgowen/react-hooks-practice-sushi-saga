import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then((sushis) => {
        const updatedSushis = sushis.map((sushi) => {
        return {...sushi, eaten: false};
      });
      setSushis(updatedSushis)
    });
  }, [])

  function handleEatenSushi(eatenSushi) {
    if (balance >= eatenSushi.price) {
    const updatedSushis = sushis.map((sushi) => {
      if (sushi.id === eatenSushi.id) return {...sushi, eaten: true};
      return sushi;
    });
    setSushis(updatedSushis);
    setBalance(balance - eatenSushi.price)
    }
  }

  const eatenSushis = sushis.filter((sushi) => sushi.eaten);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatenSushi={handleEatenSushi}/>
      <Table balance={balance} plates={eatenSushis}/>
    </div>
  );
}

export default App;
