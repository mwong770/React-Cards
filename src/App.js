import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList.js';
import Form from './Form.js';

class App extends Component {
  state = {
    cards: []
  };

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div style={{ margin: '0 auto', width: '700px' }}>
        <h1 style={{ textAlign: 'center' }}> Enter the username of a Facebook friend <br/>
          to create a card with their information </h1>
        <br/>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
