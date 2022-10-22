import { useEffect, useState } from "react";
import { getPokemonByName } from "../../services";
import { Link } from "react-router-dom";

export const Searcher = () => {

    const [keyword, setKeyword] = useState();
    const [pokemon, setPokemon] = useState();

    /*    useEffect(() => {
           const getData = async () => {
               console.log(keyword);
               const { data } = await getPokemonByName(keyword);
               console.log(data);
               setPokemon(data);
           }
           getData();
       }, [keyword]) */

    const handleSubmit = async () => {
        const getData = async () => {
            const { data } = await getPokemonByName(keyword);
            console.log(data);
            setPokemon(data);
        }
        getData();
    }


    return (
        <form onSubmit={handleSubmit()} className="Searcher">
            <label>Indtroduce el nombre de tu Pokemon</label>
            <input
                type="text"
                name="keywprd"
                onChange={(e) => setKeyword(e.target.value)}>
            </input>

            <button>
                Buscar
            </button>

        </form>
    )
}
