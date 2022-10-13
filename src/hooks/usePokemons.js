import { useEffect, useState } from 'react';
import { getPokemons, getPokemonUrl } from '../services'

export const usePokemons = () => {

    const [pokemons, setPokemons] = useState();
    const [loading, setLoading ] = useState();
    const [limit, setLimit] = useState(100);
    const pokemonsAllData = [];
    const [ pokemones, setPokemones] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await getPokemons(limit);
                setPokemons(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [limit])

    useEffect(() => {
        const updateData = async () => {
            try {
                for (let clave in pokemons){
                    const url = (pokemons[clave])
                    const dataFull = await getPokemonUrl(url)
                    pokemonsAllData.push(dataFull);
                }
                setPokemones(pokemonsAllData);
            } catch (error) {
                console.log(error);
            }
        }
        updateData();
    }, [pokemons])

    return { pokemons, setPokemons, loading, setLoading, limit, setLimit, pokemonsAllData, pokemones };
}