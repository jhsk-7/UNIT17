import { react, useState, useEffect, useRef } from "react";
import Star from "./Star";
import "./Space.css";

function Space() {
  const [windowSize, setWindowSize] = useState({ width: null, height: null }); // state for size of user window.
  const [starId, starStarId] = useState(1); // ID that gets passed to the star
  const [generated, setGenerated] = useState(0); // trigger interval for a new star
  const [stars, setStars] = useState([]); // array of the stars

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth - 15,
      height: window.innerHeight - 15,
    });
  }, []);

  function randCoor() {
    // get a random number for the x and y coordinates within the size of the window.
    let xCoor = `${Math.floor(Math.random() * windowSize.width)}px`;
    let yCoor = `${Math.floor(Math.random() * windowSize.height)}px`;
    const newStar = { xCoor, yCoor, starId };
    starStarId(starId + 1);
    return newStar;
  }

  function addStar() {
    // generate a star and add to stars array.
    const newStar = randCoor();
    setStars((prev) => [...prev, newStar]);
  }

  useEffect(() => {
    // every 2.5 seconds create a new star
    addStar();
    const interval = setInterval(() => {
      setGenerated(generated + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, [generated]);

  function handleRemove(e) {
    // get the span element id and filter the star out of the stars array by starId.
    const removeStar = Number(e.target.id);
    setStars((prevStars) =>
      prevStars.filter((star) => star.starId !== removeStar)
    );
  }

  return (
    <Star windowSize={windowSize} stars={stars} handleRemove={handleRemove} />
  );
}

export default Space;
