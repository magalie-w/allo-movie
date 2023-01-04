import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="bg-yellow-500 flex justify-between px-5 py-3">
        <div>
          <h1>AlloMovie</h1>
        </div>

        <div className="flex justify-around">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favoris">Favoris</Link></li>
          </ul>

        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default App;
