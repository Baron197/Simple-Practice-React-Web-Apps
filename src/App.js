import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumList from './components/AlbumList';
import MovieList from './components/MovieList';
import HomePage from './components/HomePage';

class App extends Component {
  state = { kucingIn: false, namakucing : "Briana" }

  onKucingBtnPress = () => {
    this.setState({ kucingIn: true, namakucing: "Rihanna" });
  }
 
  render() {
    // var obj1 = { text : "BDO Image 1"};
    console.log("render dijalankan");
    return (
      <div className="App">
        <Header loggedIn={this.state.kucingIn} username={this.state.namakucing}/>
        <br/>
        <br/>
        <br/>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/albumlist" component={AlbumList}/>
          <Route path="/movielist" component={MovieList}/>
        </div>
      </div>
    );
  }
}

export default App;
