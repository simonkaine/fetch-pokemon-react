import React, { Component } from 'react';

class Pokemon extends Component {
    render() { 
        const { speed, hp, pokemon, url_image } = this.props.pokemon;
        return ( 
            <>
                <h3>
                    {pokemon}
                </h3>
                <img
                    alt={pokemon}
                    width="100"
                    src={url_image}
                />
                <p>Speed:{speed}</p>
                <p>Hp:{hp}</p>
            </>
         );
    }
}
 
export default Pokemon;