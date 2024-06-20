'use client'

import { useState } from "react"

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let [amount, setAmount] = useState([0, 0, 0])
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
            products.map((a, i) =>
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} className="food-img"></img>
                    <h4>{a} $40</h4>
                    <button onClick={()=>{
                        let temp = [...amount]
                        temp[i] -= 1
                        setAmount(temp)
                    }}>-</button>
                    <span> {amount[i]} </span>
                    <button onClick={()=>{
                        let temp = [...amount]
                        temp[i] += 1
                        setAmount(temp)
                    }}>+</button>
                </div>
            )
            }
        </div>
    )

}