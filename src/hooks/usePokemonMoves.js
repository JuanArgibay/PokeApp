import { useEffect, useState } from 'react';
import { getPokemonUrl } from '../services';

export const usePokemonMoves = (pokemon) => {
    const [moves, setMoves] = useState(pokemon);
    const [loading, setLoading] = useState(false);
    let MovesAllData = [];
 
    useEffect(() => {
        const getData = async () => {
                try {
                    const pokemonMoves = pokemon?.moves;
                    for (let clave in pokemonMoves){
                        const {url} = (pokemonMoves[clave].move);
                        const dataFull = await getPokemonUrl({url})
                        MovesAllData.push(dataFull);
                    }
                    setMoves(MovesAllData);
                    setLoading(true);
                      
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }  
        };
        getData();
    }, [pokemon])

    return { moves, loading }
}

