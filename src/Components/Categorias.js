import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo2.svg'
import { Button, Form, Modal } from 'react-bootstrap';


class Categorias extends Component {
    constructor(props) {
        super(props);
        this.state={
            show: false, 
             isChecked:  true,
            isCheckedDestacado :  true
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
            titulo:e.target[0].value ,
        descripcion: e.target[1].value,
        precio: e.target[2].value ,
        linkImagen: e.target[3].value,
        descuento:  e.target[4].value, 
        enabled:   this.state.isChecked, // seria la otra opcion que no anda
        destacado:   this.state.isCheckedDestacado,
     /*    categoria: this.props.producto.categoria,
        marca: this.props.producto.marca,
        modelo: this.props.producto.modelo,
        cantidad: this.props.producto.cantidad,
        SKU: this.props.producto.SKU,
        peso: this.props.producto.peso     */            
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


      toggleChange = () => {
        console.log("hablitado ")
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
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group >
                <Form.Label>Precio</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group >
                <Form.Label>LinkImagen</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group >
                <Form.Label>Precio de Oferta</Form.Label>
                <Form.Control type="text"  />
              </Form.Group>
              <Form.Group >
                <Form.Label>Producto habilitado</Form.Label>
                <Form.Check type='checkbox' /*  value={this.props.producto.enabled} */  
                defaultChecked={this.state.isChecked}                
                onClick={this.toggleChange}/>
              </Form.Group>
              <Form.Group >
                <Form.Label>Producto destacado</Form.Label>
                <Form.Check type='checkbox' /*  value={this.props.producto.enabled} */  
                defaultChecked={this.state.isCheckedDestacado}                
                onClick={this.toggleChangeDestacado}/>
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
                                <NavLink key={categoria._id} to="/productos" className="list-group-item">{categoria.categoria}</NavLink>
                            )
                        }
                        else if (categoria === "Banners") {
                            return (
                                <NavLink  key={categoria._id}to="/productos" className="list-group-item">{categoria.categoria}</NavLink>
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
