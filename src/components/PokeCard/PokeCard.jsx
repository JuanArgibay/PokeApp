import './pokeCard.css'
import { Imagen } from '../Imagen/Imagen'
import { useParams, Link } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon'
import { selectTypeIcon } from '../../helpers/selectIconsType'

export const PokeCard = () => {
    const { id } = useParams();
    const { pokemon } = usePokemon(id)
    const urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";
    
    return (
        pokemon ? (
            <div className='backgroundCard'>
                <section className='poke-card-container'>
                    <article className='pokecardNameNumber'>
                        <h1>{(pokemon.name).toUpperCase()}</h1>
                        <p>Nº{pokemon.id}</p>
                    </article>
                    <article className='pokecardImgType'>
                        <Imagen url={urlImage + `/${pokemon.id}.gif`} />
                            <div>
                                {pokemon.types.map((pokemonType, index) =>
                                    <img 
                                        alt='iconType' 
                                        className='iconTypePokemon'
                                        src={selectTypeIcon(pokemonType.type.name)} 
                                        key={index}
                                        title={pokemonType.type.name}
                                        >
                                    </img> 
                                )}
                            </div>    
                    </article>
                    <Link to={`/pokemon/${pokemon.id}/habilities`}>
                        <h3>Combat Moves</h3>
                    </Link>
                    <ul className='stats'>
                        <li>
                            <div className='titleStats'>Hp</div>
                            <progress className='progress-bar-hp' value={pokemon.stats[0].base_stat} max='200'></progress>
                            <p>{pokemon.stats[0].base_stat}</p>
                        </li>
                        <li>
                            <div className='titleStats'>Attack.</div>
                            <progress className='progress-bar-atk' value={pokemon.stats[1].base_stat} max='200'></progress>
                            <p>{pokemon.stats[1].base_stat}</p>
                        </li>
                        <li>
                            <div className='titleStats'>Defense.</div> 
                            <progress className='progress-bar-def' value={pokemon.stats[2].base_stat} max='200'></progress>
                            <p>{pokemon.stats[2].base_stat}</p>
                        </li>
                        <li>
                            <div className='titleStats'>Speed.</div>
                            <progress className='progress-bar-sp' value={pokemon.stats[5].base_stat} max='200'></progress>
                            <p>{pokemon.stats[5].base_stat}</p>
                        </li>
                        <li>
                            <div className='titleStats'>Sp. Atk.</div>
                            <progress className='progress-bar-sp-atk' value={pokemon.stats[3].base_stat} max='200'></progress>
                            <p>{pokemon.stats[3].base_stat}</p>
                        </li>
                        <li>
                            <div className='titleStats'>Sp. Def.</div>
                            <progress className='progress-bar-sp-def' value={pokemon.stats[4].base_stat} max='200'></progress>
                            <p>{pokemon.stats[4].base_stat}</p>
                        </li>
                    </ul>
                </section>
            </div>) : null
    )
}