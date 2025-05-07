import React from "react";

function Shuffle({ outOfCards, handleShuffle }) {
  // when no more cards remaining, prompt user to shuffle
  //   to get a new deck.
  if (outOfCards === true) {
    return (
      <div>
        <button onClick={handleShuffle}>Shuffle</button>
      </div>
    );
  }
}

export default Shuffle;
