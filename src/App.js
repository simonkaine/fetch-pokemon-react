import React, { Component } from 'react';
import Dropdown from './dropdown.jsx';
import List from './pokeList.jsx';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <h1>Pokedex</h1>
        <input type="text"></input>
        <button>Search</button>
        <Dropdown />
        <List />
      </>
     );
  }
}
 
export default App;