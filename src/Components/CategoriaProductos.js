import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import Categorias from './Categorias'
import Modificar from './Modificar';
/* import Producto from './Producto'; */

export default class CategoriaProductos extends Component {
    
    render() {
        console.log("categorias")
        return (

            <div> 
                categorias
                {JSON.stringify(this.props.categorias)}
                <div className="pt-5">
                    <div >{/*className="container-xl" */}
                        <div className="row mx-5">
                            <Categorias categorias={this.props.categorias}/>
                            <div className="col-lg-9 mt-5">
                                <div className="row mt-5">
                                    { this.props.productos && this.props.productos.map(producto => { 
                                        return(
                                            <div key={producto._id} className="col-lg-6 col-md-2 mb-4">
                                                <ListGroup>
                                                <ListGroup.Item>Titulo</ListGroup.Item>
                                                    <ListGroup.Item>{producto.titulo}</ListGroup.Item>
                                                    <ListGroup.Item>Descripcion</ListGroup.Item>
                                                    <ListGroup.Item>{producto.descripcion}</ListGroup.Item>
                                                    <ListGroup.Item>Precio</ListGroup.Item>
                                                    <ListGroup.Item>{producto.precio}</ListGroup.Item>
                                                    <ListGroup.Item>LinkImagen</ListGroup.Item>
                                                    <ListGroup.Item>{producto.linkImagen}</ListGroup.Item>
                                                    <ListGroup.Item>Habilitado</ListGroup.Item>
                                                    <ListGroup.Item>{producto.enabled}</ListGroup.Item>
                                                    <ListGroup.Item><Modificar producto= {producto}/></ListGroup.Item>
                                                </ListGroup>
                                                
                                            </div>    
                                    )}) ||
                                    this.props.carousel && this.props.carousel.map(imagen => { 
                                        return(
                                            <div key={imagen._id} className="col-lg-6 col-md-2 mb-4">
                                                <ListGroup>
                                                <ListGroup.Item>Titulo</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.titulo}</ListGroup.Item>
                                                    <ListGroup.Item>URL</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.URL}</ListGroup.Item>
                                                    <ListGroup.Item>Texto</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.texto}</ListGroup.Item>
                                                    <ListGroup.Item>Categoria</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.categoria}</ListGroup.Item>
                                                    <ListGroup.Item>Intervalo</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.intervalo}</ListGroup.Item>
                                                    <ListGroup.Item>Habilitado</ListGroup.Item>
                                                    <ListGroup.Item>{imagen.enabled}</ListGroup.Item>
                                                    <ListGroup.Item><Modificar imagen ={imagen} /></ListGroup.Item>
                                                </ListGroup>
                                                
                                            </div>    
                                    )})
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
