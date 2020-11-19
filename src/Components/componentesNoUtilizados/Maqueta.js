/**
  * ESTE COMPONENTE ESTA PARA VOLVER A LA MAQUETA ORIGINAL POR SI ACASO
  * 
  * 
  *  */ 
import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
//import Carousel from 'react-bootstrap'
class Maqueta extends Component {
  render() {
    return (
      <div>
        <div className="pt-5">
          {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">Start Bootstrap</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Page Content */}
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <h1 className="my-4">Shop Name</h1>
                <div className="list-group">
                  <a href="#" className="list-group-item">Category 1</a>
                  <a href="#" className="list-group-item">Category 2</a>
                  <a href="#" className="list-group-item">Category 3</a>
                </div>
              </div>
              {/* /.col-lg-3 */}
              <div className="col-lg-9 mt-5">
                <Carousel >
                  <Carousel.Item interval={1000}>
                    <img
                      className="d-block img-fluid"
                      src="http://placehold.it/900x350"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block img-fluid"
                      src="http://placehold.it/900x350"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block img-fluid"
                      src="http://placehold.it/900x350"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

                <div className="row mt-5">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item One</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item Two</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item Three</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item Four</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item Five</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                      <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                      <div className="card-body">
                        <h4 className="card-title">
                          <a href="#">Item Six</a>
                        </h4>
                        <h5>$24.99</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">★ ★ ★ ★ ☆</small>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.row */}
              </div>
              {/* /.col-lg-9 */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
          {/* Footer */}
          <footer className="py-5 bg-dark">
            <div className="container">
              <p className="m-0 text-center text-white">Copyright © Meshuggah 2020</p>
            </div>
            {/* /.container */}
          </footer>
        </div>

      </div>
    );
  }
}

export default Maqueta;