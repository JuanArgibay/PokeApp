import './habilities.css';
import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';

export const Habilities = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon(id);

    const idMove = (url) => {
        const id = url.split('/');
        return id[6];
    }
    const pokemonReturn = `/pokemon/${pokemon?.id}`;

    console.log(pokemon);
    return (
        pokemon ? (
            <section className="movesContainer">
                <Link to={pokemonReturn}>
                    volver
                </Link>
                <ul>
                    {pokemon.moves.map((move, index) =>
                        <Link key={index} to={`/moves/${idMove(move.move.url)}`}>
                            <li>{move.move.name}</li>
                        </Link>
                    )}
                </ul>
            </section>
        ) : null
    )
}


