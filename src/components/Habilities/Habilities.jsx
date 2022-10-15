import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';
import { useHability } from "../../hooks/useHability";

export const Habilities = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon(id);
    const { setUrlHability } = useHability();

    return (
        pokemon ? (
            <section className="habilitiesContainer">
                {pokemon.moves.map((move, index) =>
                    <Link key={index} >
                        <li onClick={() => {
                            let prueba = move.move.url
                            setUrlHability(prueba)
                        }}>
                            <h1>{move.move.name}</h1>
                            <p>{move.move.url}</p>
                        </li>
                    </Link>
                )}
            </section>
        ) : null
    )
}


