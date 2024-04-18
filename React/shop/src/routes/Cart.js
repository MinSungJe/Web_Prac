import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { increaseOne } from '../store.js'
import { increaseAge } from '../store/userSlice.js'

function Cart() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch()

    return (
        <div>

            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{ dispatch(increaseAge(10)) }}>버튼임</button>

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
                        state.cart.map((a) => 
                        <Card key={a} cart={a}/>)
                    }
                </tbody>
            </Table>
        </div>
    )
}

function Card({cart}) {
    let dispatch = useDispatch()

    return (
        <tr>
            <td>{cart.id}</td>
            <td>{cart.name}</td>
            <td>{cart.count}</td>
            <td>
                <button onClick={()=>{
                    dispatch(increaseOne(cart.id))
                }}>+</button>
            </td>
        </tr>
    )
}

export default Cart;