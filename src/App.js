import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import CarouselBro from './components/CarouselBro';
import AlbumList from './components/AlbumList';
import MovieList from './components/MovieList';
import image1 from './images/bdo1.jpg';
import image2 from './images/bdo2.jpg';
import image3 from './images/back.jpg';

class App extends Component {
  state = { kucingIn: false, namakucing : "Briana" }

  componentWillMount() {
    console.log("ini will mount");
  }

  componentDidMount() {
    console.log("ini did mount");
  }

  componentWillUpdate() {
    console.log("ini will update");
  }

  componentDidUpdate() {
    console.log("ini did update");
  }

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
        <CarouselBro 
          legend1={"BDO Image 1"} 
          image1={image1} 
          legend2={"BDO Image 2"} 
          image2={image2} 
          legend3={"BDO Image 3"} 
          image3={image3}
          munculText={false}
          textnya={"Hello Bro Coy"}
        />
        <br />
        <input type="button" className="btn btn-success" value="Login" onClick={this.onKucingBtnPress}/>
        <br />
        <br />
        <AlbumList />
        <MovieList />
      </div>
    );
  }
}

export default App;
