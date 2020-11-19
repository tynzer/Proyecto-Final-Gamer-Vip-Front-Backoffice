
import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class Modificar extends Component {
    constructor(props) {
        super(props);
        this.state={
            show: false
            
        }
    }
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    
    render() {
        return (
            <div>
              <Button variant="primary" onClick={this.handleShow}>
          Modificar
        </Button>
        
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          {this.props.producto &&
          <Form className="p-5" show={this.state.show} onHide={this.handleClose}>
       
  <Form.Group >
    <Form.Label>Titulo</Form.Label>
    <Form.Control type="text" >{this.props.producto.titulo}</Form.Control>
  </Form.Group>

  <Form.Group >
    <Form.Label>Descripcion</Form.Label>
    <Form.Control type="text" >{this.props.producto.descripcion}</Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Precio</Form.Label>
    <Form.Control type="text" >{this.props.producto.precio}</Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>LinkImagen</Form.Label>
    <Form.Control type="text" >{this.props.producto.linkImagen}</Form.Control>
  </Form.Group>
  <Form.Group >
    <Form.Label>Habilitado</Form.Label>
    <Form.Control type="text" >{this.props.producto.enabled}</Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Guardar
  </Button>
        </Form> ||
        this.props.imagen && <Form className="p-5" show={this.state.show} onHide={this.handleClose}>
       
        <Form.Group >
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text">{this.props.imagen.titulo} </Form.Control>
        </Form.Group>
      
        <Form.Group >
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" >{this.props.imagen.URL}</Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Texto</Form.Label>
          <Form.Control type="text" >{this.props.imagen.texto}</Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Intervalo</Form.Label>
          <Form.Control type="text">{this.props.imagen.intervalo}</Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" >{this.props.imagen.categoria}</Form.Control>
        </Form.Group>
        <Form.Group >
          <Form.Label>Habilitado</Form.Label>
          <Form.Control type="text" >{this.props.imagen.enabled}</Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
              </Form> 

        }
          {/*  <Modal.Title>titulo del producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>descripcion</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Guardar
            </Button>
          </Modal.Footer>*/}
        </Modal> 
            </div>
        );
    }
}

export default Modificar;
