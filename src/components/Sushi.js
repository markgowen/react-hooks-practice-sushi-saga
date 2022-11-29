import React from "react";

function Sushi({ sushi, onEatenSushi }) {
  const { name, img_url, price, eaten } = sushi;

  function handleSushiClick() {
    if (!eaten) {
      onEatenSushi(sushi);
    } else {
      return null;
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
