import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store'

function Cart() {

    let state = useSelector((state) => state)

    return (
        <div>

            {state.user}의 장바구니

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) => 
                        <Card key={i} cart={a} idx={i+1}/>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

function Card({cart, idx}) {
    let dispatch = useDispatch()

    return (
        <tr>
            <td>{idx}</td>
            <td>{cart.name}</td>
            <td>{cart.count}</td>
            <td>
                <button onClick={()=>{
                    dispatch(changeName())
                }}>+</button>
            </td>
        </tr>
    )
}

export default Cart;