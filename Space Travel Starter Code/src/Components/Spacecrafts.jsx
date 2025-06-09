import SpacecraftsList from "./SpacecraftsLists";
import Construction from "./Construction";
import Spacecraft from "./Spacecraft";
import { useState } from "react";
import styles from "./Spacecrafts.module.css";

function Spacecrafts() {
  const initialState = "list";
  const [getPage, setGetPage] = useState(initialState);
  const [spacecraftId, setSpacecraftId] = useState(null);
  const [loading, setLoading] = useState(false);

  async function onClickHandler(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSpacecraftId(e.target.id);
      setGetPage(e.target.dataset.type);
      setLoading(false);
    }, 300);
  }

  let content;

  switch (getPage) {
    case "list":
    case "back":
      content = (
        <div>
          <div className={styles.spacecraftsNavButtonWrapper}>
            <button
              onClick={onClickHandler}
              data-type="build"
              className={styles.spacecraftsNavButton}
            >
              Build
            </button>
          </div>
          <SpacecraftsList onClickHandler={onClickHandler} />
        </div>
      );
      break;

    case "build":
      content = (
        <div>
          <div className={styles.spacecraftsNavButtonWrapper}>
            <button
              onClick={onClickHandler}
              data-type="back"
              className={styles.spacecraftsNavButton}
            >
              Back
            </button>
          </div>
          <Construction />
        </div>
      );
      break;

    case "spacecraft":
      content = (
        <div>
          <div className={styles.spacecraftsNavButtonWrapper}>
            <button
              onClick={onClickHandler}
              data-type="back"
              className={styles.spacecraftsNavButton}
            >
              Back
            </button>
          </div>
          <Spacecraft
            spacecraftId={spacecraftId}
            onClickHandler={onClickHandler}
          />
        </div>
      );
      break;

    default:
      content = <p>Unknown page</p>;
  }

  if (loading) {
    return <p>Loading ...</p>;
  }

  return <div>{content}</div>;
}

export default Spacecrafts;
