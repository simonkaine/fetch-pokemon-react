import { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './pokemon.css';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
                <div className="consistent-header">
                    <h1>Pokedex</h1>
                </div>
                <div className="links-box">
                    <NavLink exact to="/" className="home-link">Home</NavLink>
                    <NavLink to="/pokemon" className="main-page-link">Pokemon List</NavLink>
                </div>
            </header>
         );
    }
}
 
export default Header;