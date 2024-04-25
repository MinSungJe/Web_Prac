import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, deleteItem } from '../store.js'
import { increaseAge } from '../store/userSlice.js'

function Cart() {

    let state = useSelector((state) => state)
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={()=>{
                dispatch(increaseAge(10))
                console.log(state.cart)
             }}>버튼임</button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i) => 
                        <Card key={i} cart={a}/>)
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
                    dispatch(addCount(cart.id))
                }}>+</button>
            </td>
            <td>
                <button onClick={()=>{
                    dispatch(deleteItem(cart.id))
                }}>x</button>
            </td>
        </tr>
    )
}

export default Cart;