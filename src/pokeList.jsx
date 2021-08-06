import React, { Component } from 'react';
import Pokemon from './pokeItem.jsx';

class List extends Component {
    state = {  }
    render() { 
        const { pokeProp } = this.props;
        return ( 
            <>
            {pokeProp.map((item) => {
                return <Pokemon pokemon={item.pokemon} />
            })}
            </>
         );
    }
}
 
export default List;