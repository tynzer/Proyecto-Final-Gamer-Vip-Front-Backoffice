import React, { Component } from 'react';
import Categorias from './Categorias';

class Home extends Component {
  render() {
    return (
      
        <div className="pt-5">
          <div className="container">
            <div className="row">
             <Categorias categorias={this.props.categorias}/>
              <div className="col-lg-9 mt-5">
                 
              </div>
            </div>
          </div>
          
        </div>
      
    );
  }
}

export default Home;