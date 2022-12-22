import { PokemonList } from '../components/PokemonList/PokemonList';
import { Routes, Route } from 'react-router-dom';
import { PokeCard } from '../components/PokeCard/PokeCard'
import { Habilities } from '../components/Habilities/Habilities';

export const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<PokemonList />} />
                <Route path='/pokemon/:id' element={<PokeCard />} />
                <Route path='/pokemon/:id/habilities' element={<Habilities />} />
            </Routes>
        </main>
    )
}