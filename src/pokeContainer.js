import { Component } from 'react';
import DropdownSort from './dropdown.jsx';
import List from './pokeList.jsx';
import Loader from 'react-loader-spinner';
import DropdownType from './dropdownType.jsx';
import Pagination from './pagination.js';

class PokeContainer extends Component {

  state = { pokedex: [], query: null, sortPokemonOrder: 'asc', loading: false, sortType: '', pageState: 1  };

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
    searchOrderParam.set('page', this.state.pageState)

    if (this.state.query) {
      searchOrderParam.set('pokemon', this.state.query);
    }
    if (this.state.sortPokemonOrder) {
      searchOrderParam.set('sort', 'pokemon');
      searchOrderParam.set('direction', this.state.sortPokemonOrder);
    }

    if (this.state.sortType) {
      searchOrderParam.set('sort', this.state.sortType);
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
    }, 1000)
    
  }

  handleQueryUpdate = (event) => {
    // console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  HandleSortOrderUpdate = (event) => {
    this.setState({ sortPokemonOrder: event.target.value })
  } 

  handleCategoryUpdate = (event) => {
    this.setState({ sortType: event.target.value})
  }

  nextPage = async () => {
    await this.setState({ pageState: this.state.pageState + 1 });
    this.fetchData();
  }

  prevPage = async () => {
    await this.setState({ pageState: this.state.pageState - 1 });
    this.fetchData();
  }

  render() { 

    const {pokedex } = this.state;

    const filteredPokemon = pokedex.filter(
      (item) => (item.category === this.state.category || this.state.category === pokedex)
     );

    return ( 
      <>
        <h1>Pokedex</h1>
        {this.state.loading && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />}

        <input type="text" onChange={this.handleQueryUpdate}></input>
        <button onClick={this.fetchData}>Search</button>

        <DropdownSort sortOrder={this.HandleSortOrderUpdate}/>
        <DropdownType sortType={this.handleCategoryUpdate}/>
        <Pagination nextPage={this.nextPage} prevPage={this.prevPage} 
        pageState={this.state.pageState}/>

        {!this.state.loading && <List pokeProp={filteredPokemon} />}
      </>
     );
  }
}
 
export default PokeContainer;