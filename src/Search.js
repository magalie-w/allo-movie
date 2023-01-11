import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from ".";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            secur_url: null,
            size: [],
            favory: localStorage.favory ? JSON.parse(localStorage.favory) : [],
        };
    }
    
    componentDidMount() {
        this.searchMovie(this.props.router.params.query);
    }

    searchMovie(search) {
        let movies = localStorage.getItem('movies-' + search);

        if (movies) {
            this.setState({ movies: JSON.parse(movies)});
            return;
        }

        // API des films avec axios
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR&query=${search}&page=1&include_adult=false`).then(response => { 
            this.setState({movies: response.data.results});

            localStorage.setItem("movies-" + search, JSON.stringify(response.results));
        });
    }

    render() {

        const secur_url = "https://image.tmdb.org/t/p";
        const size = "original";

        return (
            <div className="flex flex-wrap">
                {this.state.movies.map(movie => (
                    <div key={movie.id} className="w-[500px] mx-auto flex border">
                        <div>
                            <img src={secur_url + "/" + size + movie.poster_path} alt="" width="200"/>
                        </div>

                        <div className="mx-auto space-y-5">
                            <h2>{(movie.title.substring(0, 30))}..</h2>

                            <p>{movie.release_date}</p>

                            <div>
                                <Link to={"/detail/" + movie.id} className="border rounded py-3 px-5 bg-yellow-300">Détail</Link>
                            </div>

                            <div>
                                {this.state.favory.includes(movie.id) ? (
                                    <button onClick={() => this.favoryAdd(movie.id)} className="border rounded py-3 px-5 bg-green-500 text-white">Favoris</button>

                                    ) : (
                                        
                                    <button onClick={() => this.favoryAdd(movie.id)} className="border rounded py-3 px-5 bg-red-500 text-white">Ajouter favoris</button>
                                    
                                    )
                                }
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        )
                
    }
}

export default withRouter(Search);