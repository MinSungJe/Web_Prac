import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import shoes1 from './images/shoes1.jpg';
import data from './data.js'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">민성제샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <div className="container">
        <div className="row">
          {
            shoes.map((a, i) => {
              return (
                <Product key={i} data={a}></Product>
              )
            })
          }
        </div>
      </div>


    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={shoes1} width="80%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  );
}

export default App;
