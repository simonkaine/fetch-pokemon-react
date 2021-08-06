import React, { Component } from 'react';
import Pokemon from './pokeItem.jsx';

class List extends Component {
    state = {  }
    render() { 
        // added a second parameter in the map to cover for the key.
        const { pokeProp } = this.props;
        return ( 
            <>
            {pokeProp.map((item, index) => {
                return <Pokemon key={index} pokemon={item} />
            })}
            </>
         );
    }
}
 
export default List;