import { createContext, useState } from 'react';
import data from './data.js'
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Main from './routes/Main.js'
import Detail from './routes/Detail.js'
import About from './routes/About.js'
import Event from './routes/Event.js'
import Cart from './routes/Cart.js'
import axios from 'axios'

export let Context1 = createContext()


function App() {
  let [shoes, setShoes] = useState(data)
  let [inventory] = useState([10, 11, 12])
  let [clickCount, setClickCount] = useState(0)
  let [loding, setLoding] = useState(false)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">민성제샵</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail/0') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <Main shoes={shoes} />
            {loding ?
              <div>로딩중입니다.</div>
              : null}
            {clickCount < 2 ?
              <button onClick={() => {
                setLoding(true)
                let url = '';
                console.log(clickCount);
                if (clickCount == 0) {
                  url = 'https://codingapple1.github.io/shop/data2.json';
                } else if (clickCount == 1) {
                  url = 'https://codingapple1.github.io/shop/data3.json';
                } else {
                  setLoding(false)
                  alert('모든 항목을 보셨습니다.')
                  return;
                }
                axios.get(url).then((data) => {
                  setLoding(false)
                  let temp = [...shoes, ...(data.data)]
                  setShoes(temp)
                  setClickCount(clickCount + 1)
                }).catch(() => {
                  alert("요청실패함")
                  setLoding(false)
                })
              }}>더보기</button>
              : null}
          </>
        } />
        <Route path='/detail/:id' element={
        <Context1.Provider value={{inventory}}>
          <Detail shoes={shoes} />
        </Context1.Provider>
        } />

        <Route path='/cart' element={ <Cart/> }/>

        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>

        <Route path='/event' element={<Event />}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path='*' element={<div>없는페이진데요</div>} />
      </Routes>
    </div>
  );
}

export default App;