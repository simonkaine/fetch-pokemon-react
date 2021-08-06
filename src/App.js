import React, { Component } from 'react';
import Dropdown from './dropdown.jsx';
import List from './pokeList.jsx';

class App extends Component {
  state = { pokedex: [] };

  fetchData = async () => {
    // grab the API url
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    // Fetch the Url
    let resonse = await fetch(url);
    // we need to grab the body object data using json()
    let data = await resonse.json()
    // we use await to avoid a pending promise

    //access the results array within the data
    //set state of the above data + state.
    this.setState({pokedex: data.results});
  }
  // this function grabs the fetched data from the API
  componentDidMount(){
      this.fetchData();
  }

  render() { 
    return ( 
      <>
        <h1>Pokedex</h1>
        <input type="text"></input>
        <button>Search</button>
        <Dropdown />
        <List pokeProp={this.state.pokedex} />
      </>
     );
  }
}
 
export default App;