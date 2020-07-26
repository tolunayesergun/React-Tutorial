import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './images/PageNotFound.jpg';

export default class NotFound extends Component {
    render() {
        return <div>
            <Link to="/">
                <img src={PageNotFound} alt="404" style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover"
                }} />

            </Link>

        </div>;
    }
}
