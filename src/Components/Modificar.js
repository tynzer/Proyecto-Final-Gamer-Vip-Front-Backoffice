import React, { Component } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

class Modificar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
     isChecked: false ,
     isCheckedDestacado : false  
    }
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true, isChecked : this.props.producto.enabled, isCheckedDestacado :  this.props.producto.destacado  });

handleShowImagen = () => this.setState({ show: true, isChecked : this.props.imagen  }    );


  handleSubmit = (e) => {
    e.preventDefault()
      
    fetch(`https://proyecto-final-gamer-vip-back.herokuapp.com/productos/${this.props.producto._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        titulo: (e.target[0].value !== "") ? e.target[0].value : e.target[0].defaultValue,
        descripcion: (e.target[1].value !== "") ? e.target[1].value : e.target[1].defaultValue,
        precio: (e.target[2].value !== "") ? e.target[2].value : e.target[2].defaultValue,
        linkImagen: (e.target[3].value !== "") ? e.target[3].value : e.target[3].defaultValue,
        descuento: (e.target[4].value !== "") ? e.target[4].value : e.target[4].defaultValue,
        enabled:   this.state.isChecked, // seria la otra opcion que no anda
        destacado:   this.state.isCheckedDestacado,
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

  handleSubmitImagen= (e) => {
    e.preventDefault()
      
    fetch(`https://proyecto-final-gamer-vip-back.herokuapp.com/carousel/${this.props.imagen._id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        titulo: (e.target[0].value !== "") ? e.target[0].value : e.target[0].defaultValue,
        URL: (e.target[1].value !== "") ? e.target[1].value : e.target[1].defaultValue,
        texto: (e.target[2].value !== "") ? e.target[2].value : e.target[2].defaultValue,
        intervalo: (e.target[3].value !== "") ? e.target[3].value : e.target[3].defaultValue,
        categoria: (e.target[4].value !== "") ? e.target[4].value : e.target[4].defaultValue,
        enabled:   this.state.isChecked, // seria la otra opcion que no anda
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
    
    console.log("hablitado ")
  /*   this.setState({
      isChecked: this.props.producto.enabled
    }); */
    this.setState({
      isChecked: !this.state.isChecked
    });
  }


  toggleChangeDestacado = () => {
        this.setState({
          isCheckedDestacado: !this.state.isCheckedDestacado
    });
  }

  render() {

    return (
      <div>        
          {(this.props.producto &&
           <> <Button variant="primary" onClick={this.handleShow}>
          Modificar
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>

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
                <Form.Label>Precio de Oferta</Form.Label>
                <Form.Control type="text" defaultValue={this.props.producto.descuento} />
              </Form.Group>
              <Form.Group >
                <Form.Label>Producto habilitado</Form.Label>
                <Form.Check type='checkbox' /*  value={this.props.producto.enabled} */  
                defaultChecked={this.state.isChecked}                
                onChange={this.toggleChange}/>
              </Form.Group>
              <Form.Group >
                <Form.Label>Producto destacado</Form.Label>
                <Form.Check type='checkbox' /*  value={this.props.producto.destacado} */  
                defaultChecked={this.state.isCheckedDestacado}                
                onChange={this.toggleChangeDestacado}/>
              </Form.Group>
              <Form.Group >
                <Form.Label>ID : </Form.Label>
               {this.props.producto._id}
              </Form.Group>
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
            </Modal></>)
            || (this.props.imagen &&
              <> <Button variant="primary" onClick={this.handleShowImagen }>
              Modificar
            </Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton></Modal.Header>
              <Form onSubmit={this.handleSubmitImagen} className="p-5" show={this.state.show} onHide={this.handleClose}>
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
                <Form.Label>Imagen habilitada</Form.Label>
                <Form.Check type='checkbox' /*  value={this.props.producto.enabled} */  
                defaultChecked={this.state.isChecked}                
                onChange={this.toggleChange}/>
              </Form.Group>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Form>  </Modal></>)
          }      
      </div>
    );
  }
}

export default Modificar;