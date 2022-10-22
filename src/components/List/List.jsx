import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'
import { Imagen } from '../Imagen/Imagen'
import './style.css'

export const ListPokemon = () => {

    const { pokemonsSelect, limit, setLimit, limitDownload, loading } = usePokemons();

    return (
        <>
            <section>
                {pokemonsSelect?.length ? (
                    <ul className='pokelist'>
                        {pokemonsSelect.map(pokemon =>
                            <li key={pokemon.id}>
                                <Link to={`/pokemon/${pokemon.id}`}>
                                    <Imagen loading={loading} url={pokemon.sprites.front_default}></Imagen>
                                    <h4 className='pokemon-name'>{pokemon.name}</h4>
                                </Link>
                            </li>
                        )}
                    </ul>
                ) : null
                }
            </section>
            {!loading ? (<button onClick={() => {
                setLimit(limit + limitDownload)
            }}>Ver mas
            </button>
            ) : (
                <p>Cargando...</p>
            )}
        </>
    )
};