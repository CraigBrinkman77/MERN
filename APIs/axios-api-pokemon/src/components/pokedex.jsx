import React, {useState} from 'react';
import axios from 'axios';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);

    const throwPokeball = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807&offset=1')
            .then((response) => {
                setPokemons(response.data.results);
                console.log(response.data.results);
            })
            .catch((err) => {

            })
    }
    return (

        <div>
            <div className="p-3">
                <button onClick={throwPokeball} className='btn btn-dark text-danger'>Fetch Pokemon</button>
                {pokemons.length > 0 && pokemons.map((pokemon, i) => {
                    return (
                        <p key={i}> {pokemon.name} </p>
            )
                })}
        </div>
        </div >

    )
};

export default Pokedex;

