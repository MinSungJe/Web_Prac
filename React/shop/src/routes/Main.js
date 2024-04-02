import { useState } from 'react';
import data from '../data.js'

function Main() {

    let [shoes] = useState(data)
    return (
        <div>
            <div className='main-bg'></div>
            <div className="container">
                <div className="row">
                    {
                        shoes.map((_a, i) => {
                            return (
                                <Card shoes={shoes[i]} i={i}></Card>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="80%" />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    );
}

export default Main;