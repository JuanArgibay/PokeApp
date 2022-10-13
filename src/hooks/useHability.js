import { useEffect, useState } from 'react';
import { getPokemon } from '../services'

export const useHability = (url) => {
    const [hability, setHability] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await getPokemon(url);
                setHability(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [url])
    
    return { hability, loading}
}

