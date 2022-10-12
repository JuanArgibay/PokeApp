import { useEffect, useState } from 'react';
import { getPokemon } from '../services'

export const usePrueba = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [limit, setLimit] = useState(50);

    useEffect(() => {
        const getData = async () => {
                for (let id = 1; id > limit; id++){
                  
                    console.log(id);
                    setLoading(true);
                    const data = await getPokemon(id);
                    console.log(data);
                    setPokemons([...pokemons, ...data]);
               
            
                }
                }  
               /*  setPokeImage(pokemon.sprites.front_default) */ 
        console.log(pokemons);
        getData();
    }, [limit, pokemons])


    return { pokemons, loading, setLoading };
}