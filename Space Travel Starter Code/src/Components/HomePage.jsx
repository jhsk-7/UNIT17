import Instructions from "./Instructions";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to the Space Travel project!</h1>
      <p className={styles.homeDescription}>
        In the not-so-distant future, where technology has evolved by leaps and
        bounds, humanity has achieved the unimaginable: they have successfully
        transformed other planets in the solar system into habitable
        environments. Once the cradle of humanity, Earth had become a shadow of
        its former self due to centuries of neglect and environmental
        degradation. As a result, the focus of humankind had shifted beyond
        Earth's boundaries, and the key to their interplanetary exploration lay
        in a cutting-edge web application called "Space Travel." The web
        application's users are commanders who will use it to evacuate humankind
        from the Earth. The web application is planned to empower users to list
        all spacecraft, view the details of a spacecraft, build a new one, and
        destroy the old one. But the capabilities of it continue beyond there.
        It is planned to enable users to view planets with the spacecraft on it
        and send spacecraft from one planet to another to transfer people.
      </p>

      {Instructions.map((instruction, index) => (
        <div key={index} className={styles.instructionItem}>
          <h2 className={styles.instructionTitle}>{instruction.name}</h2>
          <p className={styles.instructionText}>{instruction.instruction}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
