import './habilities.css';
import { usePokemon } from "../../hooks/usePokemon";
import { useParams, Link } from 'react-router-dom';
import { usePokemonMoves } from '../../hooks/usePokemonMoves';
import { ImageType } from '../ImageType/ImageType';
import { ReturnButon } from '../ReturnButton/ReturnButon';

export const Habilities = () => {
    const { id } = useParams();
    const { pokemon } = usePokemon(id);
    const { moves } = usePokemonMoves(pokemon);
    const pokemonReturn = `/pokemon/${pokemon?.id}`;

    console.log(moves);
    return (
        moves? (
            <section className="movesContainer">
                <Link to={pokemonReturn}>
                    <ReturnButon></ReturnButon>
                </Link>
                <table className='movesTable'>
                    <thead>
                        <tr>
                            <th className='movesName'>Name</th>
                            <th>Type</th>
                            <th>Class</th>
                            <th>PP</th>
                            <th>Acc</th>
                            <th>Pw</th>
                        </tr>
                    </thead>
                    <tbody>
                    {moves.map((move, index) =>
                        <tr key={index}>
                            <td className='movesName'>{(move.name).replaceAll('-', ' ')}</td>
                            <td className='typeMove'>
                                <ImageType 
                                    name={move.type.name} 
                                    index={index} 
                                    title={move.type.name}
                                    >
                                </ImageType>
                            </td>
                            <td className='classMove'>
                                <ImageType 
                                    title={move.damage_class.name} 
                                    name={move.damage_class.name}
                                    >    
                                </ImageType>
                            </td>
                            <td>{move.pp}</td>
                            <td>{move.accuracy? move.accuracy : '-'}</td>
                            <td>{move.power? move.power : '-'}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </section>
        ) : null
    )
}


