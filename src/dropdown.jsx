import React, { Component } from 'react';

class Dropdown extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='Dropdown'>
                <select>
                    <option>Asc</option>
                    <option>Dsc</option>
                </select>
            </div>

         );
    }
}
 
export default Dropdown;