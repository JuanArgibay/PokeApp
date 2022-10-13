

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
        const {data} = await axios.get (`${process.env.REACT_APP_API}pokemon/${id}`)
        return data;
    } catch (error) {
        return error;
    }
}

export const getPokemonUrl = async (url) => {
    try {
        const {data} = await axios.get (url.url)
        return data;
    } catch (error) {
        return error;
    }
}