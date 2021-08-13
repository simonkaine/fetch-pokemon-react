import { Component } from 'react';

class HomePage extends Component {

    render() { 
        return ( 
            <>
            <div className="home-message">
                <h2>Welcome to the Pokedex!</h2>
                <h5>We've got everything you wanna know about your favorite Pokemon!</h5>
                <ul className="home-list">
                    <li>Fun Stats!</li>
                    <li>Images And More!</li>
                </ul>
            </div>
            </>
         );
    }
}
 
export default HomePage;