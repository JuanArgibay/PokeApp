import { useEffect, useState } from 'react';
import { getPokemonIdMove } from '../services'


export const useMove = (idMove) => {
    const [move, setMove] = useState();
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getData = async () => {
                try {
                    setLoading(true);
                    if (idMove) {
                        const data = await getPokemonIdMove(idMove);
                        setMove(data);
                    }        
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }  
        };
        getData();
    }, [idMove])
    
    return { move, loading }
}

