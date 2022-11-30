import { useMove } from '../../hooks/useMove'
import { useParams } from 'react-router-dom';
import './habilityData.css'

export const HabilityData = () => {

    const { idMove } = useParams();
    const { move } = useMove(idMove);

    console.log(move);

    return (
        <>
            {move ? (
                <section className='habilityData'>
                    <h3>{move.names[5].name}</h3>
                    <ul>
                        <li>Poder: {!move.power? 0 : move.power}</li>
                        <li>Precisión: {!move.accuracy? 0 : move.accuracy} </li>
                        <li>PP: {move.pp}</li>
                        <li>Tipo: {move.type.name}</li>
                    </ul>
                </section>
            ) : null
            }
        </>
    )
}