import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='Dropdown'>
                <select onChange={this.props.sortOrder}>
                    <option value={'asc'}>Ascending</option>
                    <option value={'desc'}>Descending</option>
                </select>
            </div>

         );
    }
}
 
export default Dropdown;