import { Imagen } from '../Imagen/Imagen'
import { useParams, } from 'react-router-dom'
import { useEffect } from 'react'
import { getPokemon } from '../../services/index'
import { usePokemon } from '../../hooks/usePokemon'


export const PokeCard = () => {
    const { id } = useParams();
    const { pokemon, setPokemon } = usePokemon(id)


    useEffect(() => {
        const getData = async () => {
            const { data } = await getPokemon({ id })
            setPokemon(data)
        }
        getData();
    }, [id, setPokemon])

    return (
        pokemon ? (
            <section>
                <h1>{pokemon.name}</h1>
                <h2>Número {pokemon.order}</h2>
                <Imagen url={pokemon.sprites.front_default} />
                <ul>
                    <li>Hp {pokemon.stats[0].base_stat}</li>
                    <li>Ataque {pokemon.stats[1].base_stat}</li>
                    <li>Defensa {pokemon.stats[2].base_stat}</li>
                    <li>Velocidad</li>
                    <li>Atq especial {pokemon.stats[3].base_stat}</li>
                    <li>Def especial {pokemon.stats[4].base_stat}</li>
                </ul>
            </section>) : null
    )
}