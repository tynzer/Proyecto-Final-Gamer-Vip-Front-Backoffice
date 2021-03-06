import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class Modificar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isChecked: this.props.producto.enabled
    }
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleSubmit = (e) => {
    e.preventDefault()
   /*  let enabledImp= e.target[4].value || e.target[4].defaultValue
     if (enabledImp=="true" || enabledImp=="verdadeo")  {
        enabledImp = true
     }
     else{

     }
       
     
    (e.target[4].value !== "") ? e.target[4].value : e.target[4].defaultValue,*/
    console.log("envento chekded: ",this.state.isChecked)
    console.log("este nuevo checked: ",e.target[4].checked)
     
    console.log("eventoSubmitValue: ", e.target[0].value)
    console.log("eventoSubmitDefault: ", e.target[0].defaultValue)
    console.log("evento habilitado: ", e)
    fetch(`https://proyecto-final-gamer-vip-back.herokuapp.com/productos/${e.target[5].value}`, {
      method: 'PATCH',
      body: JSON.stringify({
        titulo: (e.target[0].value !== "") ? e.target[0].value : e.target[0].defaultValue,
        descripcion: (e.target[1].value !== "") ? e.target[1].value : e.target[1].defaultValue,
        precio: (e.target[2].value !== "") ? e.target[2].value : e.target[2].defaultValue,
        linkImagen: (e.target[3].value !== "") ? e.target[3].value : e.target[3].defaultValue,
        enabled:   e.target[4].checked, //this.state.isChecked, seria la otra opcion que no anda
        categoria: this.props.producto.categoria,
        marca: this.props.producto.marca,
        modelo: this.props.producto.modelo,
        cantidad: this.props.producto.cantidad,
        SKU: this.props.producto.SKU,
        peso: this.props.producto.peso
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
      }
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log("FORMULARIO ENVIADO", res);
      window.alert("Formulario enviado correctamente");
    });

    this.handleClose()
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }

  render() {
    console.log("evento inicializado: ", this.state.isChecked)
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
                <Form.Check type='checkbox' /*  value={this.props.producto.enabled} */  
                checked={this.state.isChecked}
                onChange={this.toggleChange}/>
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
