import React, { Component } from 'react';

class Pokemon extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <p>
                    {this.props.pokemon}
                </p>
            </>
         );
    }
}
 
export default Pokemon;