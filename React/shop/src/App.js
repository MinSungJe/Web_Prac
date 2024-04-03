import { useState } from 'react';
import data from './data.js'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link, useNavigate} from 'react-router-dom'
import Main from './routes/Main.js'
import Detail from './routes/Detail.js'
import About from './routes/About.js'
import Event from './routes/Event.js'

function App() {
  let navigate = useNavigate();
  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">민성제샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes}/>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />

        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버임</div>}/>
          <Route path='location' element={<div>위치정보임</div>}/>
        </Route>

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
        </Route>

        <Route path='*' element={<div>없는페이진데요</div>} />
      </Routes>
    </div>
  );
}

export default App;