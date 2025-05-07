import React, { useState, useEffect } from "react";
import axios from "axios";
import DrawCard from "./DrawCard";
import Shuffle from "./Shuffle";

function Game() {
  const [deckId, setDeckId] = useState(null); // stores the current deck ID to draw from
  const [pic, setPic] = useState(null); // gets the card image to be rendered
  const [outOfCards, setOutOfCards] = useState(false); // if remaining cards is zero, will store value true
  const [shuffle, setShuffle] = useState(false); // if shuffle needed, set status to true
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setShuffle(!shuffle); // shuffle on initial page load
  }, []);

  useEffect(() => {
    async function newDeck() {
      // get a new deck for deckId. set shuffle to false when done.
      if (shuffle === true) {
        setIsLoading(true);
        try {
          const res = await axios.get(
            "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
          );
          console.log(res);
          setDeckId(res.data.deck_id);
          setShuffle(false);
        } catch (e) {
          e;
        } finally {
          setIsLoading(false);
        }
      }
    }
    newDeck();
  }, [shuffle]);

  async function handleDrawCard() {
    // if cards available, get a card from the current deck.
    if (outOfCards === false) {
      const res = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
      );
      console.log(res);
      setPic(res.data.cards[0].image);
      if (res.data.remaining === 0) {
        setOutOfCards(true);
      }
    }
  }

  function handleShuffle() {
    setShuffle(true);
    setOutOfCards(false);
    setPic(null);
  }

  return (
    <div>
      <div>
        {isLoading ? (
          <div>Loading ... </div>
        ) : (
          <DrawCard handleDrawCard={handleDrawCard} onOutOfCards={outOfCards} />
        )}
      </div>
      <img src={pic} />
      <Shuffle outOfCards={outOfCards} handleShuffle={handleShuffle} />
    </div>
  );
}

export default Game;
