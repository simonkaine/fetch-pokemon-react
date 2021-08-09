import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class PokeDetailsPage extends Component {
    state = { data: {}, loading: false}

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
        console.log(data)
        return ( 
            <div>
                {!this.state.loading && <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />}
                <h3>This is the details page where a Pokemon will render</h3>
                <p>{data.pokemon}</p>
                <img src={data.url_image} alt="pokemon"></img>
            </div>
            
         );
    }
}
 
export default PokeDetailsPage;