import React, { useState } from "react";
import Attack from "./Attack";
import Health from "./Health";
import Status from "./Status";

function Game() {
  const [health, setHealth] = useState({ playerHealth: 100, enemyHealth: 100 });

  // Damage variable.
  let randomDamage = (damageRange) =>
    Math.floor(Math.random() * damageRange) + 1;

  // When attack, reduce player and enemy health by a random amount
  // until either is zero.
  function handleAttack(damageRange) {
    setHealth((prevHealth) => ({
      ...prevHealth,
      playerHealth: Math.max(
        prevHealth.playerHealth - randomDamage(damageRange),
        0
      ),
      enemyHealth: Math.max(
        prevHealth.enemyHealth - randomDamage(damageRange),
        0
      ),
    }));
  }

  // When restart button clicked, restart the game
  // by setting the health back to 100.
  function handleRestart() {
    setHealth((prevHealth) => ({
      ...prevHealth,
      playerHealth: 100,
      enemyHealth: 100,
    }));
  }

  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <Health
        playerHealth={health.playerHealth}
        enemyHealth={health.enemyHealth}
      />
      <Attack
        damageRange={25}
        playerHealth={health.playerHealth}
        enemyHealth={health.enemyHealth}
        onAttack={handleAttack}
        onRestart={handleRestart}
      />
      <Status
        playerHealth={health.playerHealth}
        enemyHealth={health.enemyHealth}
      />
    </div>
  );
}

export default Game;
