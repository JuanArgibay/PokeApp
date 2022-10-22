import './style.css'
import { Imagen } from '../Imagen/Imagen'
import { useParams, Link } from 'react-router-dom'
import { usePokemon } from '../../hooks/usePokemon'

export const PokeCard = () => {
    const { id } = useParams();
    const { pokemon } = usePokemon(id)

    return (
        pokemon ? (
            <section className='poke-card-container'>
                <h1>{pokemon.name}</h1>
                <h2>Número {pokemon.order}</h2>
                <Imagen url={pokemon.sprites.front_default} />
                <Link to={`/pokemon/${pokemon.id}/habilities`}>
                    <h3>Habilidades</h3>
                </Link>
                <ul>
                    <li>Hp {pokemon.stats[0].base_stat}</li>
                    <li>Ataque {pokemon.stats[1].base_stat}</li>
                    <li>Defensa {pokemon.stats[2].base_stat}</li>
                    <li>Velocidad</li>
                    <li>Atq especial {pokemon.stats[3].base_stat}</li>
                    <li>Def especial {pokemon.stats[4].base_stat}</li>
                    {pokemon.types.lenght > 1 ? (
                        <li>Tipo {pokemon.types[0].type.name}</li>
                    ) : (
                        pokemon.types.map((pokemonType, index) =>
                            <li key={index}>Tipo {pokemonType.type.name}</li>)
                    )}
                </ul>
            </section>) : null
    )
}