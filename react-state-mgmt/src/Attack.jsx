import React from "react";
import "./Attack.css";

function Attack({
  playerHealth,
  enemyHealth,
  damageRange = 30, // maximum value for damage that can be inflicted.
  onAttack,
  onRestart,
}) {
  const attack = () => onAttack(damageRange);

  // Is either player's health 0? If so, show restart button.
  // Otherwise, show attack button
  if (enemyHealth === 0 || playerHealth === 0) {
    return (
      <div className="attack-container">
        <button className="restart-button" onClick={onRestart}>
          Restart
        </button>
      </div>
    );
  } else {
    return (
      <div className="attack-container">
        <button className="attack-button" onClick={attack}>
          Fire
        </button>
      </div>
    );
  }
}

export default Attack;
