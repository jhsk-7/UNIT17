function Pokecard({ name, type, image }) {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${image}.png`;

  return (
    <div className="card-box">
      <h2>{name}</h2>
      <img src={url} alt={name}></img>
      <p>Type: {type}</p>
    </div>
  );
}
