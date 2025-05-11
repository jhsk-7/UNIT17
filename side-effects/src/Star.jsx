import { React, useEffect, useRef } from "react";
import "./Star.css";

function Star({ stars, handleRemove }) {
  const lastStarRef = useRef(null); // initialize reference for focus.

  useEffect(() => {
    if (lastStarRef.current) {
      lastStarRef.current.focus();
    }
  }, [stars]);

  return (
    <div>
      {stars.slice(1).map((star, idx, arr) => (
        <span
          className="star"
          onClick={handleRemove}
          key={idx}
          id={star.starId}
          style={{
            position: "absolute",
            top: star.yCoor,
            left: star.xCoor,
          }}
          ref={idx === arr.length - 1 ? lastStarRef : null} // get the last index in the stars array and focus reference.
          tabIndex={0}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Star;
