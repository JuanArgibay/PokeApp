import './style.css'
import { Imagen } from '../Imagen/Imagen'
import { useParams, Link } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon'

export const PokeCard = () => {
    const { id } = useParams();
    const { pokemon } = usePokemon(id)
    const urlImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/";

    console.log(pokemon);
    return (
        pokemon ? (
            <section className='poke-card-container'>
                <article className='pokecardNameNumber'>
                    <h1>{(pokemon.name).toUpperCase()}</h1>
                    <p>Número {pokemon.id}</p>
                </article>
                <article className='pokecardImgType'>
                    <Imagen url={urlImage + `/${pokemon.id}.gif`} />
                    {pokemon.types.lenght > 1 ? (
                        <p>{pokemon.types[0].type.name}</p>
                    ) : (
                        pokemon.types.map((pokemonType, index) =>
                            <p key={index}>{pokemonType.type.name}</p>)
                    )}
                </article>
                
                <Link to={`/pokemon/${pokemon.id}/habilities`}>
                    <h3>Habilidades</h3>
                </Link>
                <ul>
                    <li>Hp {pokemon.stats[0].base_stat}</li>
                    <li>Ataque {pokemon.stats[1].base_stat}</li>
                    <li>Defensa {pokemon.stats[2].base_stat}</li>
                    <li>Velocidad {pokemon.stats[5].base_stat}</li>
                    <li>Atq especial {pokemon.stats[3].base_stat}</li>
                    <li>Def especial {pokemon.stats[4].base_stat}</li>
                </ul>
            </section>) : null
    )
}