import React, { Component } from 'react';
import axios from 'axios';
import MovieDetail from './MovieDetail';
import { API_URL_1 } from '../supports/api-url/apiurl';

class MovieList extends Component {
    state = { movies: [] }

    componentWillMount() {
        axios.get(API_URL_1 + '/movies')
        .then(movie => {
            this.setState({ movies: movie.data });
        });
    }

    renderMovieList = () => {
        return this.state.movies.map(movie => 
            <MovieDetail key={movie.id} movie={movie} />
        );
    }

    render() {
        console.log(this.state.movies);
        return (
            <section className="bg-light" id="portfolio">
                <div className="container">
                    <h1>Ini Movie List</h1>
                    <div className="row">
                        {this.renderMovieList()}
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieList;