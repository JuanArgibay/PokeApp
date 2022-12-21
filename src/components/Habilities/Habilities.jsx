import './habilities.css';
import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';
import { usePokemonMoves } from '../../hooks/usePokemonMoves';

export const Habilities = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon(id);
    const { moves } = usePokemonMoves(pokemon);
    const pokemonReturn = `/pokemon/${pokemon?.id}`;

    return (
        moves? (
            <section className="movesContainer">
                <Link to={pokemonReturn}>
                    volver
                </Link>
                <ul>
                    {moves.map((move, index) =>
                        <li key={index}>
                            <p>{move.name}</p>
                            <p>{move.effect_entries[0].effect}</p>
                        </li>
                    )}
                </ul>
            </section>
        ) : null
    )
}


