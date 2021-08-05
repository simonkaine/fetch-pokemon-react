import React, { Component } from 'react';
import Pokemon from './pokeItem.jsx';

class List extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h2>List page is working</h2>
            <Pokemon />
            </>
         );
    }
}
 
export default List;