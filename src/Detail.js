import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "./index";
import Loading from "./Loading";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movie: {},
        };
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.router.params.id}?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR`).then(response => this.setState({movie: response.data, isLoaded: true}));
        
    }

    render() {

        const secur_url = "https://image.tmdb.org/t/p";
        const size = "original";

        if (this.state.isLoaded) {

            return (
                <div className="mx-auto w-[900px]">
                    <div className="text-start hover:text-orange-500">
                        <Link to="/">← Home</Link>
                    </div>

                    <div>
                        <h1>{this.state.movie.title}</h1>
                    </div>

                    <div className="flex justify-center">
                        <img src={secur_url + "/" + size + "/" + this.state.movie.poster_path} alt="" width="300"/>
                    </div>

                    <div>
                        {this.state.movie.production_companies.map(production => (
                            <div key={production.id}>
                                <div>{production.name}</div>
                            </div>
                        ))}
                    </div>

                    <div>
                        {this.state.movie.overview}
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

export default withRouter(Detail);