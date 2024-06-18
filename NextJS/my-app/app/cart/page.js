import { HelloMessage } from "./data.js"

export default function Cart() {
  let 장바구니 = ['Tomatoes', 'Pasta']

  return (
    <div>
      <HelloMessage></HelloMessage>
      <Btn color={'red'}></Btn>
      <Btn color={'blue'}></Btn>
      <h4 className="title">Cart</h4>
      {
        장바구니.map((a, i) => {
          return (
            <CartItem key={i} item={a}></CartItem>
          )
        })
      }
      <Banner content={"현대카드"}></Banner>
      <Banner content={"롯데카드"}></Banner>
    </div>
  )
}

function Btn({color}) {
  return <button style={{background: color, border: 'none', borderRadius:'5px'}}>버튼 예시</button>
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  )
}