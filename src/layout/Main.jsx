import { ListPokemon } from '../components/List/List';
import { Routes, Route } from 'react-router-dom';
import { PokeCard } from '../components/PokeCard/PokeCard'
import { Habilities } from '../components/Habilities/Habilities';
import { HabilityData } from '../components/HabilityData/HabilityData';

export const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<ListPokemon />} />
                <Route path='/pokemon/:id' element={<PokeCard />} />
                <Route path='/pokemon/:id/habilities' element={<Habilities />} />
                <Route path='/pokemon/habilities/data' element={<HabilityData />} />
            </Routes>
        </main>
    )
}