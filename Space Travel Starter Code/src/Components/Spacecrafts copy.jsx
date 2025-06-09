import SpacecraftsList from "./SpacecraftsLists";
import Construction from "./Construction";
import Spacecraft from "./Spacecraft";
import { useEffect, useState } from "react";

function Spacecrafts() {
  const initialState = "list";
  const [getPage, setGetPage] = useState(initialState);
  const [spacecraftId, setSpacecraftId] = useState(null);

  function onClickHandler(e) {
    e.preventDefault();
    console.log(e.target.id);
    setSpacecraftId(e.target.id);
    setGetPage(e.target.dataset.type);
  }

  let content;

  if (getPage === "back" || getPage === "list") {
    content = (
      <div>
        <button onClick={onClickHandler} data-type="build">
          Build
        </button>
        <SpacecraftsList onClickHandler={onClickHandler} />
      </div>
    );
  } else if (getPage === "build") {
    content = (
      <div>
        <button onClick={onClickHandler} data-type="back">
          Back
        </button>
        <Construction />
      </div>
    );
  } else if (getPage === "spacecraft") {
    content = (
      <div>
        <button onClick={onClickHandler} data-type="back">
          Back
        </button>
        <Spacecraft
          spacecraftId={spacecraftId}
          onClickHandler={onClickHandler}
        />
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Spacecrafts;
