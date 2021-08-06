import React, { Component } from 'react';

class DropdownType extends Component {
    state = {  }
    render() { 
        return ( 
            <select onChange={this.props.sortType}>
                <option value={'hp'}>Hp</option>
                <option value={'speed'}>Speed</option>
            </select>
         );
    }
}
 
export default DropdownType;