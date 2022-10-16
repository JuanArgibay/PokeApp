import { useEffect, useState } from 'react';
import { getPokemonUrlHab } from '../services'


export const useMove = () => {
    const [move, setMove] = useState();
    const [loading, setLoading] = useState(false);
    const [urlMove, setUrlMove] = useState('');
    
    useEffect(() => {
        const getData = async () => {
            console.log('entramos', urlMove);
                try {
                    setLoading(true);
                    if (urlMove) {
                        const data = await getPokemonUrlHab(urlMove);
                        console.log(data);
                        setMove(data);
                    }        
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }  
        };
        getData();
    }, [urlMove])
    
    return { move, setUrlMove, loading}
}

