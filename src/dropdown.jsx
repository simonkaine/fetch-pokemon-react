import React, { Component } from 'react';

class DropdownSort extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='DropdownSort'>
                <select onChange={this.props.sortOrder}>
                    <option value={'asc'}>Ascending</option>
                    <option value={'desc'}>Descending</option>
                </select>
            </div>

         );
    }
}
 
export default DropdownSort;