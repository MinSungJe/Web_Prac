import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useContext, useEffect, useState } from "react";
import { Nav } from 'react-bootstrap';

import {Context1} from './../App.js'

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
function Detail(props) {

  let {inventory} = useContext(Context1)

  let [count, setCount] = useState(0);
  let [show, setShow] = useState(true);
  let [num, setNum] = useState('');
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => { setShow(false) }, 2000)
    return () => {
      clearTimeout(a);
    }
  }, [])

  useEffect(() => {
    if (isNaN(num) == true)
      alert('그러지마세요')
  }, [num])

  let { id } = useParams();
  let product = props.shoes.find((x) => {
    return x.id == id
  })

  let [fade, setFade] = useState('');
  useEffect(()=>{
    let a = setTimeout(() => {
      setFade('end');
    }, 100);

    return (()=>{
      clearTimeout(a);
      setFade('');
    })
  }, [])

  return (
    <div className={"container start "+fade}>
      {show
        ? <div id="alert-box" className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        : null}
      <YellowBtn bg="blue" onClick={() => {
        setCount(count + 1)
      }}>{count}</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <input onChange={(e) => { setNum(e.target.value) }} />
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>


    </div>
  )
}

function TabContent({tab}) {

  let [fade, setFade] = useState('')
  let {inventory} = useContext(Context1)

  useEffect(()=>{
    let a = setTimeout(() => { setFade('end') }, 10);

    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={"start "+ fade}>
    { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab] }
  </div>)
}

export default Detail;