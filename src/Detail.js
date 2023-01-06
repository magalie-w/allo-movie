import { Component } from "react";
import { useParams } from "react-router-dom";

class Detail extends Component {
    constructor() {
        const params = useParams();
    }

    render() {
        return <h1>Test</h1>
    }
}

export default Detail;