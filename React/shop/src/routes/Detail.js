import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";

let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : ${props => props.bg == 'blue' ? 'white' : 'black'};
  padding : 10px;
`
function Detail(props) {
  
  let [count, setCount] = useState(0);
  let [show, setShow] = useState(true);
  let [num, setNum] = useState('');
  
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

  return (
    <div className="container">
      {show
        ? <div id="alert-box" className="alert alert-warning">
          2초이내 구매시 할인
        </div>
        : null}
      <YellowBtn bg="blue" onClick={() => {
        setCount(count + 1)
      }}>{count}</YellowBtn>
      <YellowBtn bg="orange">버튼</YellowBtn>
      <input onChange={ (e) => {setNum(e.target.value)} }/>
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
    </div>
  )
}

export default Detail;