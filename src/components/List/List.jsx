import { usePokemons } from '../../hooks/usePokemons'
import { Link } from 'react-router-dom'

export const ListPokemon = () => {

    const { pokemons } = usePokemons();

    return (
        <section>
            {pokemons?.length ? (
                <ul>
                    {pokemons.map((pokemon, index) =>
                        <li key={index}>
                            <Link to={`/pokemon/${index + 1}`}>
                                {pokemon.name}
                            </Link>
                        </li>
                    )}
                </ul>
            ) : null}
        </section>
    )
};