function Pokedex({ pokemon }) {
  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map((poke) => (
          <Pokecard
            key={poke.name}
            name={poke.name}
            image={poke.id}
            type={poke.type}
          />
        ))}
      </div>
    </div>
  );
}
