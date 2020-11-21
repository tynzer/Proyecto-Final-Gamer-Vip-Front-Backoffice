import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="container mx-auto">
                <h1 className="mt-5 pt-5">Back Office Gamer Vip - Login</h1>
            <div className="container border border-dark rounded p-3 bg-dark mt-5">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="text-white">Usuario</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese Usuario" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="text-white">Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese Contraseña" />
                    </Form.Group>
                    <NavLink className="nav-link" to="/logueado"><Button className="text-dark bg-white mt-3" variant="secondary" type="submit">Ingresar</Button></NavLink>
                    
                </Form>
            </div>
            </div>
        );
    }
}

export default Login;