

import axios from "axios"

export const getPokemons = async (limit) => {
    try {
        const data = await axios.get(`${process.env.REACT_APP_API}pokemon?limit=${limit}`)
        return data.data.results;
    } catch (err) {
        console.log(err);
    }
}

export const getPokemon = async (id) => {
    try {
        console.log(`${process.env.REACT_APP_API}pokemon/${id}`);
        const {data} = await axios.get (`${process.env.REACT_APP_API}pokemon/${id}`)
        console.log(data);
        return data;
    } catch (error) {
    }
}

export const getPokemonUrl = async (url) => {
    try {
        const {data} = await axios.get (url.url)
        console.log(data);
        return data;
    } catch (error) {
    }
}