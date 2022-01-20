import React from 'react';

const pokedex = () => {

    const [pokemonNames, setPokemonNames] = useState([]);

  const throwPokeball = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=1')
      .then((response) => {
        setPokemonNames(response.data.results);
        console.log(response.data);
      })
  }
    return (

        <div>
            <div className="p-3">
                <button onClick={clickHandler} className='btn'>Fetch Pokemon</button>
                {pokemons.length > 0 && pokemons.map((pokemon, i) => {
                    return (
                        <p key={i} {pokemon.name} </p>
                    )
                })}
            </div>
        </div>

    )
};

export default pokedex;

