import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';

export const Habilities = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon(id);

    return (
        pokemon ? (
            <section className="habilitiesContainer">
                {pokemon.moves.map((move, index) =>
                    <Link key={index} to={`/pokemon/${pokemon.id}/habilities/data`}>
                        <li>{move.move.name}</li>
                    </Link>
                )}
            </section>
        ) : null
    )
}