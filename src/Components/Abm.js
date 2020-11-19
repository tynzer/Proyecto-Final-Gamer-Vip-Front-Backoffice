import React, { Component } from 'react';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      
        <div className="p-5">
          
            <div className="row">
             <Categorias categorias={this.props.categorias}/>
              <div className="col-lg-9 mt-5">
                 
              
            </div>
          </div>
          
        </div>
      
    );
  }
}

export default Home;