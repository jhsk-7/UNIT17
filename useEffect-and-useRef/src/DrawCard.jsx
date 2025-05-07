import React from "react";

function DrawCard({ handleDrawCard, onOutOfCards }) {
  let button;
  let message;

  // if not out of cards, render a draw card button with on click
  //   function to draw the next card card.
  // if out of cards, display message to user.
  if (onOutOfCards === false) {
    button = <button onClick={handleDrawCard}>Draw Card</button>;
  } else {
    button = (
      <button onClick={() => alert("“Error: no cards remaining!”")}>
        Draw Card
      </button>
    );
    message = <p>Out of cards! Shuffle the deck.</p>;
  }

  return (
    <div>
      {button}
      {message}
    </div>
  );
}

export default DrawCard;
