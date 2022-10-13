import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'
import { Imagen } from '../Imagen/Imagen'
import './style.css'

export const ListPokemon = () => {

    const { pokemones, loading } = usePokemons();

    return (
        <>
            <section>
                {pokemones?.length ? (
                    <ul className='pokeList'>
                        {pokemones.map(pokemon =>
                            loading ? (<p>cargando</p>) : (
                                <li key={pokemon.id}>
                                    <Link to={`/pokemon/${pokemon.id}`}>
                                        <Imagen url={pokemon.sprites.front_default}></Imagen>
                                        <h4>{pokemon.name}</h4>
                                    </Link>
                                </li>)
                        )}
                    </ul>
                ) : null}
            </section>

        </>
    )
};