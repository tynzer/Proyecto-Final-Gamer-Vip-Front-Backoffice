import React, { Component } from 'react';

class Producto extends Component {
    constructor(props) {
        super(props);
        
    }
 /**
  * AL INTENTAR METER ESTE COMPONENTE COMO HIJO DE "PRODUCTOS" NO LO RENDERIZA POR ESO NO SE ESTA UTILIZANDO
  * 
  * 
  *  */   
    render() {
        return (

            <div className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.producto.linkImagen} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.producto.modelo}
                        </h4>
                        <h5>{this.props.producto.precio}</h5>
                        <p className="card-text">{this.props.producto.descripcion}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ★</small>
                    </div>
                </div>
            </div>

        );
    }
}

export default Producto;