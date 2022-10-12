import { ListPokemon } from '../components/List/List';
import { Routes, Route } from 'react-router-dom';
import { PokeCard } from '../components/PokeCard/PokeCard'


export const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<ListPokemon />} />
                <Route path='/pokemon/:id' element={<PokeCard />} />
            </Routes>
        </main>
    )
}