import { useEffect, useState } from 'react';
import { getPokemonUrlHab } from '../services'


export const useHability = () => {
    const [hability, setHability] = useState();
    const [loading, setLoading] = useState(false);
    const [urlHability, setUrlHability] = useState('');
    
    useEffect(() => {
        const getData = async () => {
                try {
                    setLoading(true);
                    if (urlHability) {
                        const data = await getPokemonUrlHab(urlHability);
                        setHability(data);
                    }        
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }  
        };
        getData();
    }, [urlHability])
    
    return { hability, setUrlHability, loading}
}

