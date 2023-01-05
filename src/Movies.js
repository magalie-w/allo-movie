import { Component } from "react";
import { Link } from "react-router-dom";

class Movies extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            movies: [],
            secur_url: null,
            size: [],
        };
    }

    componentDidMount() {

        // API des films
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    movies: result.results
                });
            },

            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const secur_url = "https://image.tmdb.org/t/p";
        const size = "original";

        return (
            <div class="flex flex-wrap">
                {this.state.movies.map(movie => (
                    <div key={movie.id} class="w-[500px] mx-auto flex border">
                        <div>
                            <img src={secur_url + "/" + size + movie.poster_path} alt="" width="200"/>
                        </div>

                        <div class="mx-auto space-y-5">
                            <h1>{(movie.title.substring(0, 30))}..</h1>

                            <p>{movie.release_date}</p>

                            <div>
                                <Link to={"/detail/" + movie.id} className="border rounded py-3 px-5 bg-yellow-300">Détail</Link>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        )
    
    }
}

export default Movies;