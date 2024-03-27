import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import main_background from './images/bg.png';
import shoes1 from './images/shoes1.jpg';

function App() {
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
          <div className="col-md-4">
            <img src={shoes1} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className="col-md-4">
            
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          </div>
          <div className="col-md-4">
            
          <div className="col-md-4">
            <img src={process.env.PUBLIC_URL+"/logo192.png"} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
