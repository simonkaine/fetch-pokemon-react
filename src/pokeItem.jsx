import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pokemon extends Component {
    render() { 
        const { speed, hp, pokemon, url_image, _id } = this.props.pokemon;
        return ( 
            <>
                <Link to={`pokemon/${_id}`}>
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
                </Link>
            </>
         );
    }
}
 
export default Pokemon;