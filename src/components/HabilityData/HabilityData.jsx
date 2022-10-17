import { useMove } from '../../hooks/useMove'
import { useParams } from 'react-router-dom';

export const HabilityData = () => {

    const { idMove } = useParams();
    const { move } = useMove(idMove);

    return (
        <>
            {move ? (
                <section>
                    <h3>{move.names[5].name}</h3>
                    <ul>
                        <li>Poder: {move.power}</li>
                        <li>Precisión: </li>
                        <li>PP: {move.pp}</li>
                        <li>Tipo: {move.type.name}</li>
                    </ul>
                </section>
            ) : null
            }
        </>
    )
}