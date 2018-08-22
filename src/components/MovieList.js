import React, { Component } from 'react';
import data from '../exdata/MovieList.json';
import MovieDetail from './MovieDetail';

class MovieList extends Component {
    state = { movies: [] }

    componentWillMount() {
       this.setState({ movies: data });
    }

    renderMovieList = () => {
        return this.state.movies.map(movie => 
            <MovieDetail key={movie.id} movie={movie} />
        );
    }

    render() {
        console.log(this.state.movies);
        return (
            <div className="container">
                <h1>Ini Movie List</h1>
                <div className="row">
                    {this.renderMovieList()}
                </div>
            </div>
        );
    }
}

export default MovieList;