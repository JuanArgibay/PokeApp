import './App.css';
import { Main } from './layout/Main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <h1>Pokemon</h1>
        <h2>Hazte con todos</h2>         
      </Link>
      
      <Main></Main>
    </div>
  );
}

export default App;
