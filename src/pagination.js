import React, { Component } from 'react';

class Pagination extends Component {

    render() { 
        
        return ( 
            <>
            <div className="page-buttons">
                {this.props.pageState > 1 && (<button onClick={this.props.prevPage}>Previous</button>)}
                <button onClick={this.props.nextPage}>Next</button>
            </div>
            </>
         );
    }
}
 
export default Pagination;