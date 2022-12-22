import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'
import { Imagen } from '../Imagen/Imagen'
import pokeGif from '../../assets/pokeGif.gif'
import './pokemonList.css'


export const PokemonList = () => {

    const { pokemonsSelect, limit, setLimit, limitDownload, loading } = usePokemons();

    return (
        <>
        <section className='pokeListContainer'>
            {pokemonsSelect?.length ? (
                <ul className='pokelist'>
                    {pokemonsSelect.map(pokemon =>
                        <li key={pokemon.id}>
                            <Link to={`/pokemon/${(pokemon.id)}`}>
                                <Imagen url={pokemon.sprites.front_default}></Imagen>
                                <h4 className='pokemon-name'>{pokemon.name.split("-").shift()}</h4>
                            </Link>
                        </li>
                    )}
                </ul>
            ) : null
            }
        </section>
        {!loading ? (<button className='showMorePokemonsButton' onClick={() => {
            setLimit(limit + limitDownload)
        }}>{<div className='pokeGif-container'>
                <img 
                    className='pokeGif' 
                    alt='pokeGif' 
                    src={pokeGif}/>
                <p>See more</p>
            </div>}
        </button>
        ) : (
            <p>Loading...</p>
        )}
    </>
    )
};