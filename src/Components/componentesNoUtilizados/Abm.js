import React, { Component } from 'react';
import { Button, Form, FormControl, ListGroup, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg'

class Abm extends Component {
    render() {
        return (
            <div>
                <Navbar className="shadow-lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Bienvenido al BackOffice de Gamer Vip</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link className="border border-white rounded ml-5" href="#home">Logout</Nav.Link>
                    </Nav>
                </Navbar>
                <div className="col-lg-3">
                <div className="text-center" >
                <img src={logo} alt="Logo" className="text-center"  />
               
               </div>
                <div className="list-group">
                    { this.props.categorias.map(categoria =>{
                        let categoriaTrim = categoria.categoria.trim();
                        let categoriaReplace = categoriaTrim.replace(/\s/g, "-");
                        return(
                             <NavLink key={categoria._id} to={"/productos/"+ categoriaReplace} className="list-group-item">{categoria.categoria}</NavLink>
                    )
                    })}
                 
                </div>
            </div>
            </div>
        );
    }
}

export default Abm;