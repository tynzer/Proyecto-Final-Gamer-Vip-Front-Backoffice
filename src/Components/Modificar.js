
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
    
    handleSubmit = (e) => {
      e.preventDefault()
      console.log("eventoSubmitValue: ", e.target[0].value)
      console.log("eventoSubmitDefault: ", e.target[0].defaultValue)
      fetch(`https://proyecto-final-gamer-vip-back.herokuapp.com/productos/${e.target[5].value}`,{
        method:'PUT',
        body:JSON.stringify({
          titulo:(e.target[0].value !== "")? e.target[0].value: e.target[0].defaultValue, 
          descripcion:(e.target[1].value !== "")? e.target[1].value: e.target[1].defaultValue,
          precio:(e.target[2].value !== "")? e.target[2].value: e.target[2].defaultValue,
          linkImagen:(e.target[3].value !== "")? e.target[3].value: e.target[3].defaultValue,
          enabled:(e.target[4].value !== "")? e.target[4].value: e.target[4].defaultValue
        }),
        headers:{'Content-Type':'application/json'}
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log("FORMULARIO ENVIADO",res);
        window.alert("Formulario enviado correctamente");
    });
    
      this.handleClose()
    }

    render() {
        return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Modificar
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>
          {(this.props.producto &&
            <Form onSubmit={this.handleSubmit} className="p-5" show={this.state.show} onHide={this.handleClose}>
              
              <Form.Group >
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.titulo} />
              </Form.Group>
              <Form.Group >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.descripcion} />
              </Form.Group>
              <Form.Group >
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.precio} />
              </Form.Group>
              <Form.Group >
                <Form.Label>LinkImagen</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.linkImagen} />
              </Form.Group>
              <Form.Group >
                <Form.Label>Habilitado</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.enabled} />
              </Form.Group>
              <Form.Group >
                <Form.Label>Id</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto._id} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>)
            || (this.props.imagen &&
              <Form onSubmit={this.handleSubmit} className="p-5" show={this.state.show} onHide={this.handleClose}>
                <Form.Group >
                  <Form.Label>Titulo</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.titulo} />
                </Form.Group>
                <Form.Group >
                  <Form.Label>URL</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.URL} />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Texto</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.texto} />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Intervalo</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.intervalo} />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.categoria} />
                </Form.Group>
                <Form.Group >
                  <Form.Label>Habilitado</Form.Label>
                  <Form.Control type="text" defaultValue={this.props.imagen.enabled} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Form>)
          }
        </Modal>
      </div>
    );
  }
}

export default Modificar;
