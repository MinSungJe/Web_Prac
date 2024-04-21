import { useNavigate } from "react-router-dom";

function Main(props) {
    return (
        <div>
            <div className='main-bg'></div>
            <div className="container">
                <div className="row">
                    {
                        props.shoes.map((_a, i) => {
                            return (
                                <Card key={i} shoes={props.shoes[i]}></Card>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

function Card(props) {
    let navigate = useNavigate();
    return (
        <div className="col-md-4">
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes.id + 1) + ".jpg"} width="80%" onClick={()=>{navigate('/detail/'+props.shoes.id)}}/>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
        </div>
    );
}

export default Main;