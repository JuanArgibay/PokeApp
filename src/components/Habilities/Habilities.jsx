import './style.css';
import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';
import { useMove } from "../../hooks/useMove";

export const Habilities = () => {

    const { id } = useParams();
    const { pokemon } = usePokemon(id);
    const { setUrlMove } = useMove();

    const idMove = (url) => {
        const id = url.split('/');
        return id[6];
    }

    return (
        pokemon ? (
            <section className="habilitiesContainer">
                <ul>
                    {pokemon.moves.map((move, index) =>
                        <Link key={index} to={`/moves/${idMove(move.move.url)}`}
                            onClick={() => {
                                let { url } = move.move;
                                if (url) {
                                    console.log(url);
                                    setUrlMove(url);
                                    console.log('deberia estar cambiado');
                                }
                            }} >
                            <h1>{move.move.name}</h1>
                            <p>{move.move.url}</p>
                        </Link>
                    )}
                </ul>
            </section>
        ) : null
    )
}


