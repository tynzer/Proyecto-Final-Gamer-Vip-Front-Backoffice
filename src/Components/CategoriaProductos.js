import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import Categorias from './Categorias'
import Modificar from './Modificar';
/* import Producto from './Producto'; */

export default class CategoriaProductos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productos: false,
            show:false,
            text:"",
            carousel:false

        }
    }

    filter(e){
        let text = e.target.value
        const data = this.props.productos
        const banners = this.props.carousel
        if (data){
        const newData = data.filter(function(item){
            const itemDataTitle = item.titulo.toUpperCase()
          /*   const itemDataDescp = item.descripcion.toUpperCase()
            const itemDataMarca = item.marca.toUpperCase() */
            const campo = itemDataTitle/* +" "+itemDataDescp+" "+ itemDataMarca */
            const textData = text.toUpperCase()
            return campo.indexOf(textData) > -1
        })
        this.setState({
            productos: newData,
            text: text,
        })}
    else{        
        const newData = banners.filter(function(item){
        const itemDataTitle = item.titulo.toUpperCase()
        /*   const itemDataDescp = item.descripcion.toUpperCase()
          const itemDataMarca = item.marca.toUpperCase() */
          const campo = itemDataTitle/* +" "+itemDataDescp+" "+ itemDataMarca */
          const textData = text.toUpperCase()
          return campo.indexOf(textData) > -1
        })
    this.setState({
        carousel: newData,
        text: text,
    })}

      }



    render(){

    console.log("prouctos",this.state.productos)
    console.log("caoruse",this.state.carousel)
    return(

            <div>
    <div className="pt-5">
        <div >{/*className="container-xl" */}
            <div className="row mx-5">
                <input className="form-control mx-sm-3 mt-5" type="text" value={this.state.text} onChange={(e) => this.filter(e)} placeholder="Search" aria-label="Search" />
                <Categorias categorias={this.props.categorias} />
                <div className="col-lg-9 mt-5">
                    <div className="row mt-5">
                        {(this.state.productos && this.state.productos.map(producto => {
                            return (
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
                                        <ListGroup.Item><Modificar producto={producto} /></ListGroup.Item>
                                    </ListGroup>

                                </div>
                            )
                        }) )||(
                        this.props.productos && this.props.productos.map(producto => {
                            return (
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
                                        <ListGroup.Item><Modificar producto={producto} /></ListGroup.Item>
                                    </ListGroup>

                                </div>
                            )
                        })) ||
                        
                        ((this.props.carousel && this.props.carousel.map(imagen => {
                            return (
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
                                        <ListGroup.Item><Modificar imagen={imagen} /></ListGroup.Item>
                                    </ListGroup>

                                </div>
                            )
                        }))||( 
                        this.props.carousel && this.props.carousel.map(imagen => {
                            return (
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
                                        <ListGroup.Item><Modificar imagen={imagen} /></ListGroup.Item>
                                    </ListGroup>

                                </div>
                            )
                        })









                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
            </div >
        );
    }
}
