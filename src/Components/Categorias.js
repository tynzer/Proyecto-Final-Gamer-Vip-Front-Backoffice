import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo2.svg'

class Categorias extends Component {
    render() {
        return (
            <div className="col-lg-3 mt-5">
                <div className="text-center" >
               <h1 className="my-4 border border-secondary">Listar:</h1> 
               </div>
                <div className="list-group">
                    { this.props.categorias.map(categoria =>{
                        
                        let categoriaTrim = categoria.categoria.trim();
                        let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
                        if (categoria === "Todos-los-productos"){
                            return (
                                <NavLink to="/productos" className="list-group-item">{categoria.categoria}</NavLink>
                            )
                        }
                        else if (categoria === "Banners") {
                            return (
                                <NavLink to="/productos" className="list-group-item">{categoria.categoria}</NavLink>
                            )
                        }
                        else {
                            return (
                                <NavLink key={categoria._id} to={"/productos/" + categoriaReplace} className="list-group-item">{categoria.categoria}</NavLink>
                            )
                        }
                    })
                 
                    
                    }
                 
                </div>
            </div>
        );
    }
}

export default Categorias;
