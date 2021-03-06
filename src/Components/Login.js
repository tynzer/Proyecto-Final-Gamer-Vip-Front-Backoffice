import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Redirect } from "react-router-dom";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redireccionar: false,
      isAuthenticated: false,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("eventoSubmitValue: ", e.target[0].value)
    console.log("eventoSubmitDefault: ", e.target[0].defaultValue)
    let that = this // porque pierdo el scope
    fetch("https://proyecto-final-gamer-vip-back.herokuapp.com/login", {
      method: 'POST',
      body: JSON.stringify({
        email: (e.target[0].value !== "") ? e.target[0].value : e.target[0].defaultValue,
        password: (e.target[1].value !== "") ? e.target[1].value : e.target[1].defaultValue
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      if (res.status === 200) { // ACA IBA POR 201
        /* localStorage.setItem("login", JSON.stringify(true)) */
        that.setState({ isAuthenticated: true })
        return res.json()
      }

    }

    ).then(data => {
      if (that.state.isAuthenticated) {
        localStorage.setItem("userId", JSON.stringify(data.userId))
        localStorage.setItem("token", JSON.stringify(data.token))
        /*      that.setState({ isAuthenticated: true }) 
             if (that.state.isAuthenticated){ */
        that.setState({ redireccionar: true })
      }
      else { window.alert("Login incorrecto"); }
    })


    /*   console.log("FORMULARIO ENVIADO", res);
       window.alert("Formulario enviado correctamente"); 
   });*/

  }

  render() {
    if (this.state.redireccionar) {
      return (<Redirect to={"/productos/"} />)
    } else {
      return (
        <div className="container mx-auto">
          <h1 className="mt-5 pt-5">Back Office Gamer Vip - Login</h1>
          <div className="container border border-dark rounded p-3 bg-dark mt-5">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-white">Usuario</Form.Label>
                <Form.Control type="text" placeholder="Ingrese Usuario" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="text-white">Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese Contraseña" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Ingresar
              </Button>
              {/*                     <NavLink className="nav-link"   to="/logueado"><Button className="text-dark bg-white mt-3" variant="secondary" type="submit">Ingresar</Button></NavLink>
 */}
            </Form>
          </div>
        </div>
      );
    }
  }
}

export default Login;