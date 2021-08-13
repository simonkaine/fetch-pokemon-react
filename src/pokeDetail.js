import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './pokemon.css';

class PokeDetailsPage extends Component {
    state = { data: {}, loading: false }

    loadPokemonData = async () => {

        const { pokeId } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokeId}`;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({data})

        setTimeout(() => {
            this.setState({ pokedex: data.results, loading: true });
        }, 1000)
    }

    componentDidMount() {
        this.loadPokemonData();
    }

    render() { 
        const { data } = this.state;
        return ( 
            <div>
                {!this.state.loading && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />}
                <h1>{data.pokemon}</h1>
                <img src={data.url_image} alt="pokemon"></img>
                <ul>
                    <li>Type 1: {data.type_1}</li>
                    <li>Type 2: {data.type_2}</li>
                    <li>Attack: {data.attack}</li>
                    <li>Defense: {data.defense}</li>
                    <li>Hp: {data.hp}</li>
                    <li>Speed: {data.speed}</li>
                    <li>Height: {data.height} cm or センチメートル</li>
                    <li>Weight: {data.weight} Kgs or 毫</li>
                </ul>
            </div>
            
         );
    }
}
 
export default PokeDetailsPage;