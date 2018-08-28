import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const image={
      borderRadius: 15,
      width: 500,
      height: 300
    }
    const css1={
      color:"black",
      fontSize: 25,
      fontFamily: "courier",
      fontWeight: "bold",
      padding:'0px 60px'
    }
    const css2={
      color:"blue",
      fontSize: 30,
      fontFamily: "courier",
      padding:'0px 60px' 
    }
    const line={
      width: 300
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to checkpoint 3</h1>
        </header>
        <p className="App-intro"> 
        </p>
        <img style={image} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"/>
        <p style={css1}>
        Paragraph 1:
          Consectetur sint eiusmod magna Lorem ea minim occaecat elit ullamco sint. Ipsum deserunt qui esse nisi veniam. Est nisi minim cillum adipisicing Lorem irure eu ad consectetur sit pariatur sint sit id. Consectetur culpa sunt voluptate commodo et ex laborum anim adipisicing qui fugiat sit velit in. Quis adipisicing ad cupidatat anim voluptate occaecat aliquip ad minim qui. Veniam cillum ipsum esse consequat occaecat esse non nulla labore ex esse ex aute esse.
        </p>
        <br/>
        <hr/>
        <p style={css2}>
          Paragraph 2:
          Fugiat est anim occaecat qui. Commodo deserunt aute proident laboris minim aliqua qui ut sunt est eu aute occaecat. Magna id est ea anim incididunt. Aliquip voluptate est eiusmod pariatur ullamco nisi voluptate.
        </p>
      </div>
    );
  }
}

export default App; 