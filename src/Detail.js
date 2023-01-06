import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "./index";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
        };
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${this.props.router.params.id}?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR`).then(response => this.setState({movie: response.data}));
        
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <h1>{this.state.movie.title}</h1>
            </div>
        )
    }
}

export default withRouter(Detail);