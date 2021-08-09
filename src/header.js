import { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div>
                    Pokedex
                </div>
                <div>
                    <NavLink exact to="/">Home Link</NavLink>
                    <NavLink to="/pokemon">Pokemon list Link</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;