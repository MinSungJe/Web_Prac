import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './pages/Main.js'
import Detail from './pages/Detail.js'

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
      
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;