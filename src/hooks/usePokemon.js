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
                setPokemon(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [id])


    return { pokemon, setPokemon, loading, setLoading };
}