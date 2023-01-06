import axios from "axios";
import { Component } from "react";
import { withRouter } from "./index";

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
        };
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/{movie_id}?api_key=a4872679cc543a16475400119b475fb6&language=fr-FR').then(response => this.setState({movie: response.data[0]}));
    }

    render() {
        return <h1>Ggg</h1>
    }
}

export default withRouter(Detail);