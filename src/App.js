import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { withRouter } from '.';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        search: "",
      }
    }

  handleKeyUp = (event) => {
    if (event.key == "Enter") {
      this.handleSearch();
    }
  }

  handleSearch = () => {
    this.props.router.navigate(`/search/${this.state.search}`);
  }

  render() {
    return (
      <div className="App">
        <div className='bg-yellow-500 py-5 px-3'>
          <div className="flex justify-between">
            <div>
              <h1>AlloMovie</h1>
            </div>

            <div className="flex justify-around">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/favory">Favoris</Link></li>
              </ul>

            </div>
          </div>

          <div>
            <input type="text" className='py-1 px-3 rounded-l' value={this.state.search} onChange={(e) => this.setState({search: e.target.value })} onKeyUp={this.handleKeyUp}></input>
            <button className='py-1 px-3 bg-red-500 rounded-r text-white' onClick={this.handleSearch}>Search</button>
          </div>

        </div>

        <Outlet />
      </div>
    );
  }
}

export default withRouter(App);
