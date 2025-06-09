import { useEffect, useState } from "react";
import SpaceTravelApi from "../services/SpaceTravelApi";
import styles from "./Spacecraft.module.css";
import spaceshipImg from "../images/spaceshipImg.jpg";

function Spacecraft({ spacecraftId, onClickHandler }) {
  const [spacecraft, setSpacecraft] = useState(null);

  useEffect(() => {
    async function getSpacecraft() {
      try {
        const craft = await SpaceTravelApi.getSpacecraftById({
          id: spacecraftId,
        });
        setSpacecraft(craft.data);
      } catch (err) {
        console.error("Error fetching spacecraft:", err);
      }
    }

    getSpacecraft();
  }, [spacecraftId]);

  console.log(spacecraft);

  if (!spacecraft) return <p>Loading spacecraft...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.inputBox} style={{ alignItems: "center" }}>
          <img
            src={spaceshipImg}
            alt={spacecraft.name}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <p>Name: {spacecraft.name}</p>
          <p>Capacity: {spacecraft.capacity}</p>
          <p>Description: {spacecraft.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Spacecraft;
