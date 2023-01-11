import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Detail from "./Detail";
import Loading from "./Loading";

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            movies: [],
            secur_url: null,
            size: [],
            // si localStorage.movie est vide ça crée un tableau vide
            favory: localStorage.favory ? JSON.parse(localStorage.favory) : [],
        };
    }

    componentDidMount() {

        // API des films avec axios
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate").then(response => this.setState({movies: response.data.results, isLoaded: true}));
        
        // API des films avec fetch
        // fetch("https://api.themoviedb.org/3/discover/movie?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         this.setState({
        //             isLoaded: true,
        //             movies: result.results
        //         });
        //     },

        //     (error) => {
        //         this.setState({
        //             isLoaded: true,
        //             error
        //         });
        //     }
        // )
    }

    favoryAdd(id) {
        let favory = this.state.favory;

        // Ajoute id au tableau movie
        if(!favory.includes(id)) {
            favory.push(id);
        } else {
            favory = favory.filter(item => item != id);
        }
        // Sauvegarde le nouveau tableau movie avec l'id
        localStorage.setItem('favory', JSON.stringify(favory));
        this.setState({favory: favory});
    }

    render() {
        const secur_url = "https://image.tmdb.org/t/p";
        const size = "original";

        if (this.state.isLoaded) {

            return (
                <div>
                    <h1 className="text-xl">Les films</h1>

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
                                            <button onClick={() => this.favoryAdd(movie.id)}>Favoris</button>
                                            ) : (
                                                <button onClick={() => this.favoryAdd(movie.id)}>Pas favoris</button>
                                            )
                                        }
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div> 

            )
        } else {
            return (
                <div>
                    <Loading />
                </div>
            )
        }
    
    }
}

export default Movies;