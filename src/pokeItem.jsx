import React, { Component } from 'react';

class Pokemon extends Component {
    state = {  }
    render() { 
        return ( 
            <>
            <h3>This item page is working too</h3>
                <p>
                    {this.props.pokemon};
                </p>
            </>
         );
    }
}
 
export default Pokemon;