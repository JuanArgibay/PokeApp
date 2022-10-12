import { useEffect, useState } from 'react';
import { getPokemon } from '../services'

export const usePokemon = (id) => {
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await getPokemon(id);
                console.log(data);
                setPokemon(data);
               /*  setPokeImage(pokemon.sprites.front_default) */
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        console.log(id, 'asdfasdfa');
        getData();
    }, [id])


    return { pokemon, setPokemon, loading, setLoading };
}