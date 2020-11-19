import React, { Component } from 'react';

import Abm from './Components/Abm';


import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import CategoriaProductos from "./Components/CategoriaProductos"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';

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
          categorias.push({categoria:"Todos los productos"})
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
    let categoriaRouterProps = routerProps.match.params.categoria
    let categoriaProductos = categoriaRouterProps.replace(/-/g, " ");
    if (categoriaProductos === "Todos los productos"){
        return (<CategoriaProductos productos={this.state.productos} categorias={this.state.categorias} />)
    }
    if (categoriaProductos === "Banners"){
      return (<CategoriaProductos carousel={this.state.carousel} categorias={this.state.categorias} />)
  }
    let filterProductos = this.state.productos.filter(producto => producto.categoria === categoriaProductos)
    return ( filterProductos ? <CategoriaProductos productos={filterProductos} categorias={this.state.categorias} /> : <NotFound/>)
    }
   

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/"><Login/></Route>
          <Route path="/logueado"><Abm carousel={this.state.carousel} categorias={this.state.categorias} /></Route>
          <Route path="/productos/:categoria?" render={this.renderProductos}></Route>  
          <Route component={NotFound}/>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
