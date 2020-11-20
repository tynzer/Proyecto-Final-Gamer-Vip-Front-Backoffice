import React, { Component } from 'react';

import Abm from './Components/Abm';


import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import CategoriaProductos from "./Components/CategoriaProductos"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://proyecto-final-gamer-vip-back.herokuapp.com/",
      productos: [],
      categorias: [],
      carousel: []
    }
  }

  componentDidMount() {

    fetch(`${this.state.url}productos`)
      .then(res => res.json())
      .then(productos => {
        this.setState({ productos: productos });
      })

    fetch(`${this.state.url}categorias`)
      .then(res => res.json())
      .then(categorias => {
          categorias.unshift({categoria:"Todos los productos"})
          categorias.push({categoria:"Banners"})
          console.log(categorias)
        this.setState({ categorias: categorias });
      })

    fetch(`${this.state.url}carousel`)
      .then(res => res.json())
      .then(carousel => {
        this.setState({ carousel: carousel });
      })
  }
 
  renderProductos = routerProps => {
    console.log(routerProps)
    let categoriaRouterProps = routerProps.match.params.categoria
    let categoriaProductos = categoriaRouterProps.replace(/-/g, " ");
    console.log(categoriaProductos)
    if (categoriaProductos === "Todos los productos"){
        return (<CategoriaProductos productos={this.state.productos} categorias={this.state.categorias} />)
    }
    if (categoriaProductos === "Banners"){
      return (<CategoriaProductos carousel={this.state.carousel} categorias={this.state.categorias} />)
  }
    let filterProductos = this.state.productos.filter(producto => producto.categoria === categoriaProductos)
    return ( filterProductos ? <CategoriaProductos productos={filterProductos} categorias={this.state.categorias} /> : <NotFound/>)
    }
   
    renderAbm = () => {
      return( <Abm carousel={this.state.carousel} categorias={this.state.categorias} />)
    }

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/"><Login/></Route>
         <ProtectedRoute  path="/logueado"  component={this.renderAbm} >{/* <Abm carousel={this.state.carousel} categorias={this.state.categorias} />  */}</ProtectedRoute>
       <ProtectedRoute path="/logueado/:categoria?" component={this.renderProductos}></ProtectedRoute>  
      {/*     <Route component={NotFound}/> */}
        </Switch>
        
      </Router>
    );
  }
}

export default App;
