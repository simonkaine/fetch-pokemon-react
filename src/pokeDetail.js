import React, { Component } from 'react';

class PokeDetailsPage extends Component {
    state = { data: {} }

    loadPokemonData = async () => {
        const { pokeId } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokeId}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({data})
    }

    componentDidMount() {
        this.loadPokemonData();
    }

    render() { 
        const { data } = this.state;
        console.log(data)
        return ( 
            <div>
                <h3>This is the details page where a Pokemon will render</h3>
                <p>{data.pokemon}</p>
                <img src={data.url_image} alt="pokemon"></img>
            </div>
            
         );
    }
}
 
export default PokeDetailsPage;