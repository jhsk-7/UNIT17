import { useState, useEffect } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import spaceshipImg from "../images/spaceshipImg.jpg";
import styles from "./Planets.module.css";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [targetPlanet, setTargetPlanet] = useState(null);
  const [moveCraft, setMoveCraft] = useState(null);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    async function fetchPlanet() {
      const response = await SpaceTravelApi.getPlanets();
      const data = response.data;
      setPlanets(data);
    }
    async function fetchSpacecraft() {
      const response = await SpaceTravelApi.getSpacecrafts();
      const data = response.data;
      setSpacecrafts(data); // no need to filter here anymore
    }
    fetchPlanet();
    fetchSpacecraft();
  }, [refreshCount]);

  useEffect(() => {
    async function moveShip() {
      if (targetPlanet && moveCraft !== null) {
        try {
          await SpaceTravelApi.sendSpacecraftToPlanet({
            spacecraftId: moveCraft,
            targetPlanetId: parseInt(targetPlanet, 10),
          });
          console.log(`Moved ship ${moveCraft} to planet ${targetPlanet}`);
          setTargetPlanet(null);
          setMoveCraft(null);
          setRefreshCount((prev) => prev + 1);
        } catch (err) {
          console.error("Failed to move spacecraft:", err);
        }
      }
    }
    moveShip();
  }, [targetPlanet, moveCraft]);

  function onClickHandler(e) {
    e.preventDefault();
    if (e.target.dataset.type === "planet") {
      setTargetPlanet(e.target.id);
    }
    if (e.target.dataset.type === "craft") {
      setMoveCraft(e.target.id);
    }
  }

  return (
    <div className={styles.container}>
      {planets.map((planet) => {
        const filteredCrafts = spacecrafts.filter(
          (craft) => craft.currentLocation === planet.id
        );

        return (
          <div className={styles.planetWrapper} key={planet.id}>
            <img
              id={planet.id}
              name={planet.name}
              data-type="planet"
              src={planet.pictureUrl}
              onClick={onClickHandler}
              className={styles.planetImg}
              alt=""
            />
            <div className={styles.planetName}>{planet.name}</div>
            <div className={styles.planetPopulation}>
              {planet.currentPopulation}
            </div>

            <div className={styles.spacecraftWrapper}>
              {filteredCrafts.map((spacecraft) => (
                <div
                  key={spacecraft.id}
                  id={spacecraft.id}
                  style={{ margin: "12px" }}
                  data-type="craft"
                  className={styles.spacecraftItem}
                  onClick={onClickHandler}
                >
                  <img src={spaceshipImg} alt="" className={styles.craftImg} />
                  <div>{spacecraft.name}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Planets;
