import React from "react";
import "./Health.css";

function Health({ playerHealth, enemyHealth }) {
  // Display the health of the player and enemy.
  return (
    <div className="health-container">
      <h3>Player: {playerHealth}</h3>
      <h3>Enemy: {enemyHealth}</h3>
    </div>
  );
}

export default Health;
