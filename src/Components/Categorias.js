import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo2.svg'
import { Button, Form, Modal } from 'react-bootstrap';


class Categorias extends Component {
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
         fetch('https://proyecto-final-gamer-vip-back.herokuapp.com/productos/',{
          method:'POST',
          body:JSON.stringify({
            titulo:(e.target[0].value !== "")? e.target[0].value: e.target[0].defaultValue, 
            descripcion:(e.target[1].value !== "")? e.target[1].value: e.target[1].defaultValue,
            precio:(e.target[2].value !== "")? e.target[2].value: e.target[2].defaultValue,
            linkImagen:(e.target[3].value !== "")? e.target[3].value: e.target[3].defaultValue,
            enabled:(e.target[4].value !== "")? e.target[4].value: e.target[4].defaultValue,
            categoria:(e.target[5].value !== "")? e.target[5].value: e.target[5].defaultValue,                 
          }),
          headers:{
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' +  JSON.parse(localStorage.getItem('token'))
        }
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
            <div className="col-lg-3 mt-5">
                <div className="text-center" >
                <Button variant="success" onClick={this.handleShow}>
          Agregar
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton></Modal.Header>

        <Form onSubmit={this.handleSubmit} className="p-5" show={this.state.show} onHide={this.handleClose}>
              
              <Form.Group >
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text"   />
              </Form.Group>
              <Form.Group >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text"   />
              </Form.Group>
              <Form.Group >
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group >
                <Form.Label>LinkImagen</Form.Label>
                <Form.Control type="text"   />
              </Form.Group>
              <Form.Group >
                <Form.Label>Habilitado</Form.Label>
                <Form.Control type="text"   />
              </Form.Group>
              <Form.Group>
              <Form.Label>Categoria</Form.Label>
                <Form.Control type="text"  />
                </Form.Group>
           
           
              <Button variant="primary" type="submit">
                Guardar
              </Button>
            </Form>
            </Modal>


               <h1 className="my-4 border border-secondary">Listar:</h1> 
               </div>
                <div className="list-group">
                    {this.props.categorias && this.props.categorias.map(categoria =>{
                        
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
