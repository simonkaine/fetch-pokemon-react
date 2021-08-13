import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokeContainer from './pokeContainer.js';
import Header from './header.js';
import PokeDetailsPage from './pokeDetail.js';
import HomePage from './home.js';
import './pokemon.css';


class App extends Component {
  
  render() { 
    return (
      <section className="mainApp">

        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/pokemon/:pokeId" component={PokeDetailsPage}></Route>
            <Route path="/pokemon" component={PokeContainer} />
            <Route path="/" exact component={HomePage}></Route>
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}

export default App;

// {!this.state.loading && <List pokeProp={this.state.pokedex} />}

// {/* <Route path="/pokemon/:pokeId" component={PokeDetail} /> */}