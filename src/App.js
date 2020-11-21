import React, { Component } from 'react';
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import CategoriaProductos from "./Components/CategoriaProductos"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import ProtectedRoute from './Components/ProtectedRoute';

/* import Abm from './Components/Abm'; */

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
        categorias.unshift({ categoria: "Todos los productos" })
        categorias.push({ categoria: "Banners" })
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
    console.log(this)
   
    let categoriaRouterProps = routerProps.match.params.categoria 
    console.log(categoriaRouterProps)
    let categoriaProductos = categoriaRouterProps.replace(/-/g, " ") || categoriaRouterProps
    console.log("categoria prodcutos",categoriaProductos)
    if (categoriaProductos === "Todos los productos") {
      return (<><NavBar /><CategoriaProductos productos={this.state.productos} categorias={this.state.categorias} /></>)
    }
    if (categoriaProductos === "Banners") {
      return (<><NavBar /><CategoriaProductos carousel={this.state.carousel} categorias={this.state.categorias} /></>)
    }
   /*  Hasta que cambie el estado no muestro nada  */
   else{
     if (this.state.productos.length <=0){
      return (<></>)
     }
      let filterProductos = this.state.productos.filter(producto => producto.categoria === categoriaProductos)
      console.log("filter prodcutos",filterProductos)
      return (filterProductos.length >0 ? <CategoriaProductos productos={filterProductos} categorias={this.state.categorias} /> : <NotFound />)
    }
  }
/*   renderAbm = () => {
    return (<Abm carousel={this.state.carousel} categorias={this.state.categorias} />)
  } */

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
           <ProtectedRoute exact path="/"><NavBar /><CategoriaProductos productos={this.state.productos} categorias={this.state.categorias} /></ProtectedRoute>        {/*   <ProtectedRoute carousel={this.state.carousel} categorias={this.state.categorias} path="/logueado" Component={this.renderAbm}></ProtectedRoute> */}
          <Route exact path="/login"><NavBar /><Login /></Route>    
          <ProtectedRoute exact path="/productos"><NavBar /><CategoriaProductos productos={this.state.productos} categorias={this.state.categorias} /></ProtectedRoute>
          <ProtectedRoute productos={this.state.productos} categorias={this.state.categorias} carousel={this.state.carousel} path="/productos/:categoria?" component={this.renderProductos}></ProtectedRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
