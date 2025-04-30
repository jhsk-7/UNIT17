import React from "react";
import "./Status.css";

function Status({ playerHealth, enemyHealth }) {
  // Figure out if the game is still active, or if one of the
  // players health is zero and the game is over and who won.
  const active = playerHealth && enemyHealth > 0;
  const win = playerHealth === 0 && enemyHealth > 0;
  const lose = playerHealth > 0 && enemyHealth === 0;
  const draw = (playerHealth && enemyHealth) === 0;

  // Based on who won, display a message.
  if (active) {
    return <h2 className="">Make them feel the FIRE!</h2>;
  } else if (win) {
    return <h2 className="status-win">This world is ours for the taking!</h2>;
  } else if (lose) {
    return (
      <h2 className="status-lose">
        You're an embarrassment to the Federation!
      </h2>
    );
  } else if (draw) {
    return (
      <h2 className="status-draw">I can't tell what's going on out there...</h2>
    );
  }
}

export default Status;
