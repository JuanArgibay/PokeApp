import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'
import { Imagen } from '../Imagen/Imagen'
import './style.css'

export const ListPokemon = () => {

    const { pokemonsSelect, limit, setLimit, limitDownload } = usePokemons();


    return (
        <>
            <section>
                {pokemonsSelect?.length ? (
                    <ul className='pokeList'>
                        {pokemonsSelect.map(pokemon =>
                            <li key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.id}`}>
                                    <Imagen url={pokemon.sprites.front_default}></Imagen>
                                    <h4>{pokemon.name}</h4>
                                </Link>
                            </li>
                        )}
                    </ul>
                ) : null
                }
            </section>
            <button onClick={() => {
                setLimit(limit + limitDownload)
            }}>Ver mas</button>
        </>
    )
};