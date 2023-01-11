import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Favory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favory: localStorage.favory ? JSON.parse(localStorage.favory) : [],
        }
    }

    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/discover/movie?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate").then(response => this.setState({movies: response.data.results.filter(item => this.state.favory.includes(item.id))}));
    }

    render() {
        const secur_url = "https://image.tmdb.org/t/p";
        const size = "original";

        return (
            <div>
                <h1 className="text-xl">Les favoris</h1>

                <div className="flex flex-wrap">
                    {this.state.movies.map(movie => (
                        <div key={movie.id} className="w-[500px] mx-auto flex border">
                            <div>
                                <img src={secur_url + "/" + size + movie.poster_path} alt="" width="200"/>
                            </div>

                            <div className="mx-auto space-y-5">
                                <h2>{movie.title.substring(0, 30)}..</h2>
                                
                                <p>{movie.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
}
}

export default Favory;