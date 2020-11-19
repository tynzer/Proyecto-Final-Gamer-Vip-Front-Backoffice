
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
          {(this.props.producto&&

          <Form className="p-5" show={this.state.show} onHide={this.handleClose}>
       
  <Form.Group >
    <Form.Label>Titulo</Form.Label>
    <Form.Control type="text" defaultValue={this.props.producto.titulo}/>
  </Form.Group>

  <Form.Group >
    <Form.Label>Descripcion</Form.Label>
    <Form.Control type="text" defaultValue={this.props.producto.descripcion}/>
  </Form.Group>
  <Form.Group >
    <Form.Label>Precio</Form.Label>
    <Form.Control type="text" defaultValue={this.props.producto.precio}/>
  </Form.Group>
  <Form.Group >
    <Form.Label>LinkImagen</Form.Label>
    <Form.Control type="text" defaultValue={this.props.producto.linkImagen}/>
  </Form.Group>
  <Form.Group >
    <Form.Label>Habilitado</Form.Label>
    <Form.Control type="text" defaultValue={this.props.producto.enabled}/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Guardar
  </Button>
          </Form> )
      || (this.props.imagen &&
        <Form className="p-5" show={this.state.show} onHide={this.handleClose}>
       
        <Form.Group >
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.titulo}/> 
        </Form.Group>
      
        <Form.Group >
          <Form.Label>URL</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.URL}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Texto</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.texto}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Intervalo</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.intervalo}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.categoria}/>
        </Form.Group>
        <Form.Group >
          <Form.Label>Habilitado</Form.Label>
          <Form.Control type="text" defaultValue={this.props.imagen.enabled}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
              </Form> )

      }
        
        
          
        </Modal> 
            </div>
        );
    }
}

export default Modificar;
/*
</Form.Control>
</Form.Control>
{this.props.producto.precio}</Form.Control>
</Form.Control>
</Form.Control>
*/