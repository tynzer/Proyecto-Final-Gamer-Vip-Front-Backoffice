import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../joystick_logo.svg';
import { Button } from 'react-bootstrap';
import {Redirect } from 'react-router-dom';
/* import Login from './Components/Login'; */

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectLogin: false,
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        this.setState({ redirectLogin: true })
        console.log(this)
    }

    render() {
        if (this.state.redirectLogin) {
            return (<Redirect to={"/"} />)
        } else {
            return (
                < nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                    <div className="container">
                        <NavLink className="navbar-brand " to="/"> <span style={{ fontSize: '1.85rem' }}>Gamer VIP </span>
                            <img src={logo} alt="Logo" className="d-inline-block align-top" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Button onClick={this.handleClick} >Log Out</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            );
        }
    }
}
export default NavBar;
