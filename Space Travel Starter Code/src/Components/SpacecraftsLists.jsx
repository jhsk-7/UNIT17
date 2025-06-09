// component

import SpaceTravelApi from "../services/SpaceTravelApi";
import { useEffect, useState } from "react";
import spaceshipImg from "../images/spaceshipImg.jpg";
import styles from "./SpacecraftsLists.module.css";

function SpacecraftsList({ onClickHandler }) {
  const [spacecrafts, setSpacecrafts] = useState([]);

  useEffect(() => {
    async function fetchSpacecraft() {
      const response = await SpaceTravelApi.getSpacecrafts();
      const data = response.data;
      setSpacecrafts(data);
    }
    fetchSpacecraft();
  }, []);

  async function onDeleteHandler(id) {
    await SpaceTravelApi.destroySpacecraftById({ id: id });
    setSpacecrafts((prevSpacecrafts) =>
      prevSpacecrafts.filter((craft) => craft.id !== id)
    );
  }

  return (
    <div className={styles.container}>
      {spacecrafts.map((spacecraft) => (
        <div key={spacecraft.id} className={styles.wrapper}>
          <div className={styles.inputBox} style={{ alignItems: "center" }}>
            <img
              className={styles.craftImg}
              id={spacecraft.id}
              src={spaceshipImg}
              alt={`${spacecraft.name}`}
              data-type="spacecraft"
              style={{ width: "70px", height: "70px", cursor: "pointer" }}
              onClick={onClickHandler}
            />
            <div>name: {spacecraft.name}</div>
            <div>capacity: {spacecraft.capacity}</div>
          </div>

          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              onClick={() => onDeleteHandler(spacecraft.id)}
            >
              Destroy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SpacecraftsList;
