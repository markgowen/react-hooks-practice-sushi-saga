import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatenSushi }) {
  const [index, setIndex] = useState(0);

  const sushisToDisplay = sushis
    .slice(index, index + 4)
    .map((sushi) => (
        <Sushi 
          key={sushi.id}
          sushi={sushi}
          onEatenSushi={onEatenSushi}
        />
    ))

  function handleClickMore() {
    setIndex((index) => (index + 4))
  }

  return (
    <div className="belt">
      {sushisToDisplay}
      <MoreButton onMoreClick={handleClickMore} />
    </div>
  );
}

export default SushiContainer;
