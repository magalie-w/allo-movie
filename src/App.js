import logo from './logo.svg';
import './App.css';
import Movies from './Movies.js';

function App() {
  return (
    <div className="App">
      <div className="bg-yellow-500 flex justify-between px-5 py-3">
        <div>
          <h1>AlloMovie</h1>
        </div>

        <div className="flex justify-around w-[200px]">
          <h2>Home</h2>
          <h2>Favoris</h2>
        </div>
      </div>

    <div>
      <Movies />
    </div>
    </div>
  );
}

export default App;
