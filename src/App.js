import React, { Component } from 'react';
import Dropdown from './dropdown.jsx';
import List from './pokeList.jsx';
// import Loading from './loading.jsx';
import Loader from 'react-loader-spinner'

class App extends Component {
  state = { pokedex: [], query: null, sortPokemonOrder: 'asc', loading: false };

  // this function grabs the fetched data from the API
  componentDidMount(){
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true });
    // grab the API url
    let url = "https://pokedex-alchemy.herokuapp.com/api/pokedex";
    
    // In order to update the url param, interpolate with choice pokemon
    // URLsearchParams, including set method
    const searchOrderParam = new URLSearchParams();
    if (this.state.query) {
      searchOrderParam.set('pokemon', this.state.query);
    }
    if (this.state.sortPokemonOrder) {
      searchOrderParam.set('sort', 'pokemon');
      searchOrderParam.set('direction', this.state.sortPokemonOrder);
    }
    url = url + `?${searchOrderParam.toString()}`;

    // Fetch the Url
    let resonse = await fetch(url);
    // we use await to avoid a pending promise
    // we need to grab the body object data using json()
    let data = await resonse.json()
    
    //access the results array within the data
    //set state of the above data + state.
    setTimeout(() => {
      this.setState({ pokedex: data.results, loading: false });
    }, 4000)
    
  }

  handleQueryUpdate = (event) => {
    // console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  HandleSortOrderUpdate = (event) => {
    this.setState({ sortPokemonOrder: event.target.value })
  } 

  render() { 
    return ( 
      <>
        <h1>Pokedex</h1>
        {this.state.loading && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />}
        <input type="text" onChange={this.handleQueryUpdate}></input>
        <button onClick={this.fetchData}>Search</button>
        <Dropdown sortOrder={this.HandleSortOrderUpdate}/>
        {!this.state.loading && <List pokeProp={this.state.pokedex} />}
      </>
     );
  }
}
 
export default App;